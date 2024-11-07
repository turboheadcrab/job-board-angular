import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClrAlertModule } from '@clr/angular';

@Component({
  selector: 'app-applicant',
  standalone: true,
  imports: [ClrAlertModule],
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicantComponent {}
