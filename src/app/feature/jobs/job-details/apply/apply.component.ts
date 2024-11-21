import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Signal,
} from '@angular/core';
import { ClrFormsModule } from '@clr/angular';
import {
  FormControl,
  FormRecord,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ApplicationFormService } from '../../../../core/service/application-form.service';
import { ApplicationSectionComponent } from '../../../../shared/component/application-section/application-section.component';

@Component({
  standalone: true,
  selector: 'app-apply',
  imports: [
    ClrFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationSectionComponent,
  ],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyComponent {
  #applicationFormService = inject(ApplicationFormService);

  applicationFormRecord: FormRecord<FormControl<string>>;

  id = input.required<string>();

  sectionTypesKeys: Signal<string[]> =
    this.#applicationFormService.sectionTypesKeys;

  constructor() {
    this.applicationFormRecord =
      this.#applicationFormService.getApplicationFormRecord();
    this.applicationFormRecord.valueChanges.subscribe((value) =>
      console.info('ApplyComponent: valueChanges:', value),
    );
    this.applicationFormRecord.statusChanges.subscribe((status) =>
      console.info('ApplyComponent: statusChanges:', status),
    );

    console.info(
      'ApplyComponent.constructor(): form',
      this.applicationFormRecord,
    );
  }

  canAddSection(sectionKey: string): boolean {
    return this.#applicationFormService.canAddSection(sectionKey);
  }

  onAddSection(sectionTypeKey: string): void {
    this.#applicationFormService.onAddSection(sectionTypeKey);
  }

  onSubmit() {
    this.#applicationFormService.onSubmit(this.id());
  }
}
