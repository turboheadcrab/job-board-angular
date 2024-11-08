import { Component, inject, input } from '@angular/core';
import { ClarityModule, ClrCommonFormsModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionType, Section } from '../../model/question.model';
import { ApplicationQuestionComponent } from './application-question/application-question.component';
import { ApplicationConfigService } from '../../../core/service/application-config.service';

@Component({
  selector: 'app-application-section',
  standalone: true,
  imports: [
    ClrCommonFormsModule,
    ClarityModule,
    FormsModule,
    ApplicationQuestionComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './application-section.component.html',
  styleUrl: './application-section.component.scss',
})
export class ApplicationSectionComponent {
  #applicationService = inject(ApplicationConfigService);

  section = input.required<Section>();

  constructor() {
    for (const question of this.section().questions) {
    }
  }

  protected readonly QuestionType = QuestionType;
}
