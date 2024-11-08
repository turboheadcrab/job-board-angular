import { Component, input } from '@angular/core';
import { Question, QuestionType } from '../../../model/question.model';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-application-question',
  standalone: true,
  imports: [ClarityModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './application-question.component.html',
  styleUrl: './application-question.component.scss',
})
export class ApplicationQuestionComponent {
  question = input.required<Question>();
  protected readonly QuestionType = QuestionType;
}
