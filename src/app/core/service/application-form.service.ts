import { computed, inject, Injectable, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlStatus,
  Validators,
} from '@angular/forms';

import { ApplicationConfigService } from './application-config.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Section } from '../../shared/model/question.model';
import { tap } from 'rxjs';
import { State } from '../../shared/model/state.model';
import { initializeState } from '../util/initialize-state';

@Injectable({
  providedIn: 'root',
})
export class ApplicationFormService {
  #applicationConfigService = inject(ApplicationConfigService);
  #formBuilder = inject(FormBuilder);

  #applicationFormGroup = this.#formBuilder.group({
    applicant: this.#formBuilder.record<FormControl>(
      {},
      { validators: [Validators.required] },
    ),
    experience: this.#formBuilder.array([this.#formBuilder.group({})]),
    anythingElse: this.#formBuilder.control<string>(
      { value: '', disabled: false },
      { nonNullable: true },
    ),
  });

  // Status
  #questionsConfigState = signal<State<Section[]>>(initializeState());
  #applicationFormValue = toSignal(this.#applicationFormGroup.valueChanges);
  #applicationFormStatus = toSignal<FormControlStatus>(
    this.#applicationFormGroup.statusChanges,
  );

  // Selectors
  isQuestionsConfigLoaded = computed<boolean>(
    () => this.#questionsConfigState().isLoaded,
  );
  applicationFormValue = computed(() => this.#applicationFormValue());
  isApplicationFormValid = computed(
    () => this.#applicationFormStatus() === 'VALID',
  );

  constructor() {
    this.#applicationFormGroup.valueChanges.subscribe((value) =>
      console.info(
        'ApplicationFormService.constructor(): form value changed:',
        value,
      ),
    );
    this.#applicationConfigService
      .getSections()
      .pipe(
        tap({
          next: (response: Section[]) =>
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
  }
}
