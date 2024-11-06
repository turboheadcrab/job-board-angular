import { Component, inject, input, signal } from '@angular/core';
import { ClrFormsModule } from '@clr/angular';
import {
  FormBuilder,
  FormRecord,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApplicationService } from '../../../../core/service/application.service';
import { Question } from '../../../../shared/model/question.model';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [ClrFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.scss',
})
export class ApplyComponent {
  #applicationService = inject(ApplicationService);
  #formBuilder = inject(FormBuilder);

  form: FormRecord = this.#formBuilder.record({});

  id = input.required<string>();

  questions = signal<Question[]>([]);

  constructor() {
    this.#applicationService
      .getQuestions()
      .pipe(
        tap({
          next: (questions: Question[]) => this.questions.set(questions),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
    for (const question of this.questions()) {
      const formControl = this.#formBuilder.control<string>('');
      this.form.addControl(question.id, formControl);
    }
  }

  onSubmit() {
    console.info('ApplyComponent.onSubmit(), form.value: ', this.form.value);
  }
}
