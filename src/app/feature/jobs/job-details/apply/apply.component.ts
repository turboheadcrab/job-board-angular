import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { ClrFormsModule } from '@clr/angular';
import {
  FormBuilder,
  FormControl,
  FormRecord,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ApplicationService } from '../../../../core/service/application.service';
import {
  Question,
  QuestionType,
} from '../../../../shared/model/question.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [ClrFormsModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.scss',
  providers: provideNgxMask(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyComponent {
  #applicationService = inject(ApplicationService);
  #formBuilder = inject(FormBuilder);

  form: FormRecord = this.#formBuilder.record({});

  id = input.required<string>();

  questions = signal<Question[]>([]);
  shownQuestions = computed<Question[]>(() => this.questions());
  formInitialized = signal<boolean>(false);

  constructor() {
    console.info('ApplyComponent.constructor() started');
    this.form.valueChanges.subscribe((value) =>
      console.log('Form value changed to: ', value),
    );
    this.form.statusChanges.subscribe((status) =>
      console.log('Form status changed to: ', status),
    );
    this.#applicationService
      .getQuestions()
      .pipe(
        tap({
          next: (questions: Question[]) => this.questions.set(questions),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
    for (const question of this.shownQuestions()) {
      const formControl = this.#createAControl(question);
      if (question.type === QuestionType.Radio) {
        console.info(
          'ApplyComponent.constructor(), initializing radio',
          question,
        );
        formControl.valueChanges.subscribe((value) =>
          console.log('Radio value changed to: ', value),
        );
        formControl.statusChanges.subscribe((status) =>
          console.log('Radio status changed to: ', status),
        );
        console.log('Radio validators:', formControl.validator);
      }
      this.form.addControl(question.id, formControl);
    }

    this.formInitialized.set(true);
    console.info('ApplyComponent.constructor() ended');
  }

  #createAControl(question: Question): FormControl {
    const validators: ValidatorFn[] = [];
    if (question.required) {
      validators.push(Validators.required);
    }
    if (question.type === QuestionType.Email) {
      validators.push(Validators.email);
    }
    return this.#formBuilder.control<string>('', validators);
  }

  onSubmit() {
    const formValue = this.form.value;
    console.info('ApplyComponent.onSubmit(), form.value: ', formValue);
    const paragraphs = this.shownQuestions().map<Paragraph>(
      (question: Question, index: number) =>
        new Paragraph({
          children: [
            new TextRun({
              text: `${index + 1}. ${question.label}`,
              bold: true,
              break: 2,
            }),
            new TextRun({
              text: `${formValue[question.id]}`,
              break: 1,
            }),
          ],
        }),
    );
    console.info('ApplyComponent.onSubmit(), paragraphs: ', paragraphs);
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              alignment: 'center',
              heading: 'Heading1',
              children: [
                new TextRun({
                  text: 'Application Answers',
                }),
              ],
            }),
            ...paragraphs,
          ],
        },
      ],
    });
    this.#download(doc);
  }

  #download(doc: Document): void {
    Packer.toBlob(doc).then((blob) => saveAs(blob, 'test.docx'));
  }

  protected readonly QuestionType = QuestionType;
}
