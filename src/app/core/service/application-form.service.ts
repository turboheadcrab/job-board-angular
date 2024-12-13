import { computed, inject, Injectable, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormRecord,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

import {
  Question,
  QuestionType,
  Section,
} from '../../shared/model/question.model';
import { ApplicationConfigService } from './application-config.service';
import type { State } from '../../shared/model/state.model';
import { initializeState } from '../util/initialize-state';
import { DocumentService } from './document.service';
import { JobService } from './job.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationFormService {
  // Services
  #applicationConfigService = inject(ApplicationConfigService);
  #formBuilder = inject(FormBuilder);
  #documentService = inject(DocumentService);
  #jobService = inject(JobService);

  // Class members
  #applicationFormRecord = this.#formBuilder.record<FormControl<string>>({});

  // State (private writable signals)
  #questionsConfigState = signal<State<Section[]>>(initializeState());
  #shownSectionsKeys = signal<Set<string>>(new Set());

  // Selectors (public computed signals)
  sectionTypes = computed<Section[]>(
    () => this.#questionsConfigState().response ?? [],
  );
  sectionTypesKeys = computed(() =>
    this.sectionTypes().map((section) => section.key),
  );
  shownSectionKeys = this.#shownSectionsKeys.asReadonly();

  constructor() {
    // Fetch sections from the service
    this.#applicationConfigService
      .getSections()
      .pipe(
        tap({
          next: (response: Section[]): void =>
            this.#questionsConfigState.update(
              (state: State<Section[]>): State<Section[]> => ({
                ...state,
                response,
                isLoaded: true,
              }),
            ),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();

    // Based on the section types fetched, initialize the form and shown sections
    toObservable(this.sectionTypes)
      .pipe(
        tap({
          next: (sections: Section[]): void =>
            this.#initializeSections(sections),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  #initializeSections(sections: Section[]) {
    const newShownSections = new Set<string>();

    sections.forEach((section: Section) => {
      if (section.isRepeatable) {
        return;
      }
      this.#initializeControlsForSection(section, 0);
      const sectionKey = this.#generateFieldKey(section.key, 0);
      newShownSections.add(sectionKey);
    });

    console.info(
      'ApplicationFormService.#initializeSections: #applicationFormRecord',
      this.#applicationFormRecord,
    );
    this.#shownSectionsKeys.set(newShownSections);
  }

  #initializeControlsForSection(section: Section, index: number): void {
    section.questions.forEach((question) => {
      const formControlKey = this.#generateFieldKey(
        section.key,
        index,
        question.key,
      );
      const formControl = this.#formBuilder.control<string>(
        {
          value: '',
          disabled: false,
        },
        {
          validators: this.#getValidators(question),
          nonNullable: true,
        },
      );
      this.#applicationFormRecord.setControl(formControlKey, formControl);
    });
  }

  #generateFieldKey(
    sectionKey: string,
    sectionIndex: number,
    questionKey?: string,
  ): string {
    if (!questionKey) {
      return `${sectionKey}_${sectionIndex}`;
    }
    return `${sectionKey}_${sectionIndex}_${questionKey}`;
  }

  #getValidators(question: Question): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (question.isRequired) {
      validators.push(Validators.required);
    }
    if (question.type === QuestionType.Email) {
      validators.push(Validators.email);
    }
    return validators;
  }

  #countRepeatableSections(sectionKey: string): number {
    return Array.from(this.#shownSectionsKeys()).filter((key: string) =>
      key.startsWith(sectionKey),
    ).length;
  }

  getApplicationFormRecord(): FormRecord<FormControl<string>> {
    return this.#applicationFormRecord;
  }

  getSectionType(sectionKey: string): Section {
    const sectionTypes = this.sectionTypes();
    const foundSection = sectionTypes.find(
      (section: Section) => section.key === sectionKey,
    );
    if (!foundSection) {
      throw new Error(`Section type with key ${sectionKey} not found.`);
    }
    return foundSection;
  }

  getQuestion(sectionKey: string, questionKey: string) {
    const foundSectionType = this.sectionTypes().find((section: Section) =>
      sectionKey.startsWith(section.key),
    );
    if (!foundSectionType) {
      throw new Error(`Section type with key ${sectionKey} not found.`);
    }
    const foundQuestion = foundSectionType.questions.find(
      (question: Question) => question.key === questionKey,
    );
    if (!foundQuestion) {
      throw new Error(`Question with key ${questionKey} not found.`);
    }
    return foundQuestion;
  }

  getControl(fieldKey: string): FormControl<string> {
    return this.#applicationFormRecord.get(fieldKey) as FormControl<string>;
  }

  canAddSection(sectionKey: string): boolean {
    const repeatableSectionCount = this.#countRepeatableSections(sectionKey);
    return (
      this.getSectionType(sectionKey).isRepeatable && repeatableSectionCount < 3
    );
  }

  onAddSection(sectionKey: string): void {
    const foundSection: Section | undefined = this.sectionTypes().find(
      (sectionType: Section) => sectionType.key === sectionKey,
    );
    if (!foundSection) {
      throw new Error(
        'ApplicationFormService.onAddSection: Section not found.',
      );
    }
    const repeatableSectionCount = this.#countRepeatableSections(sectionKey);
    console.info(
      'ApplicationFormService.onAddSection: repeatableSectionCount',
      repeatableSectionCount,
    );
    if (repeatableSectionCount >= 3) {
      return;
    }
    this.#initializeControlsForSection(foundSection, repeatableSectionCount);
    const fieldKey = this.#generateFieldKey(sectionKey, repeatableSectionCount);
    this.#shownSectionsKeys.update(
      (shownSectionsKeys: Set<string>) =>
        new Set<string>([...shownSectionsKeys, fieldKey]),
    );
  }

  onRemoveSection(sectionKey: string) {
    console.info(
      'ApplicationFormService.onRemoveSection: sectionKey',
      sectionKey,
    );
    this.#shownSectionsKeys.update((shownSectionsKeys: Set<string>) => {
      const newShownSections = new Set<string>(shownSectionsKeys);
      newShownSections.delete(sectionKey);
      return newShownSections;
    });
    const controlsKeysToRemove = Object.keys(
      this.#applicationFormRecord.controls,
    ).filter((key) => key.startsWith(sectionKey));
    controlsKeysToRemove.forEach((controlKey) =>
      this.#applicationFormRecord.removeControl(controlKey),
    );
  }

  onSubmit(jobId: string) {
    console.info('ApplyComponent: form: ', this.#applicationFormRecord);
    console.info('ApplyComponent: jobId: ', jobId);
    /*this.#documentService.saveFormAsWordDoc(
      this.#applicationFormRecord,
      this.sectionTypes(),
    );*/

    const isNumber = !isNaN(parseFloat(jobId)) && isFinite(Number(jobId));
    if (isNumber) {
      this.#jobService.getJob(Number(jobId)).subscribe((job) => {
        this.#documentService.uploadFormWordDocument(
          this.#applicationFormRecord,
          this.sectionTypes(),
          job.title,
        );
      });
    } else {
      this.#documentService.uploadFormWordDocument(
        this.#applicationFormRecord,
        this.sectionTypes(),
      );
    }
  }
}
