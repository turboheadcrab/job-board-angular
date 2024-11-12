import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Question, QuestionType } from '../../../model/question.model';
import { ClarityModule } from '@clr/angular';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ApplicationFormService } from '../../../../core/service/application-form.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-application-question',
  standalone: true,
  imports: [ClarityModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './application-question.component.html',
  styleUrl: './application-question.component.scss',
  providers: provideNgxMask(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationQuestionComponent {
  #applicationFormService = inject(ApplicationFormService);

  sectionKey = input.required<string>();
  questionKey = input.required<string>();
  fieldKey = computed(() => `${this.sectionKey()}_${this.questionKey()}`);

  question = signal<Question | undefined>(undefined);

  constructor() {
    toObservable(this.fieldKey)
      .pipe(
        tap({
          next: (value) => {
            console.info(
              'ApplicationQuestionComponent.constructor(): fieldKey changed:',
              value,
            );
            const question = this.#applicationFormService.getQuestion(
              this.sectionKey(),
              this.questionKey(),
            );
            this.question.set(question);
          },
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  getControl(sectionKey: string, questionKey: string): FormControl<string> {
    return this.#applicationFormService.getControl(sectionKey, questionKey);
  }

  protected readonly QuestionType = QuestionType;
}
