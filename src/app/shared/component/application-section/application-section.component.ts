import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { ClarityModule, ClrCommonFormsModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { toObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

import { ApplicationFormService } from '../../../core/service/application-form.service';
import type { Section } from '../../model/question.model';
import { ApplicationQuestionComponent } from './application-question/application-question.component';

@Component({
  standalone: true,
  selector: 'app-application-section',
  imports: [
    ClrCommonFormsModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationQuestionComponent,
  ],
  templateUrl: './application-section.component.html',
  styleUrl: './application-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationSectionComponent {
  #applicationFormService = inject(ApplicationFormService);

  // Input signals
  sectionTypeKey = input.required<string>();

  section = signal<Section | undefined>(undefined);

  // State (private computed signals)
  #shownSectionKeys = this.#applicationFormService.shownSectionKeys;

  // Selectors (public computed signals)
  thisSections = computed<string[]>(() => {
    const section: Section | undefined = this.section();
    if (!section) {
      return [];
    }
    return Array.from(this.#shownSectionKeys()).filter((key: string) =>
      key.startsWith(section.key),
    );
  });
  isSectionRepeatable = computed<boolean>(() => {
    const section: Section | undefined = this.section();
    if (!section) {
      return false;
    }
    return section.isRepeatable;
  });

  constructor() {
    toObservable(this.sectionTypeKey)
      .pipe(
        tap({
          next: (sectionTypeKey: string) => {
            const sectionType =
              this.#applicationFormService.getSectionType(sectionTypeKey);
            this.section.set(sectionType);
          },
        }),
      )
      .subscribe();
  }

  onRemoveSection(sectionKey: string): void {
    this.#applicationFormService.onRemoveSection(sectionKey);
  }
}
