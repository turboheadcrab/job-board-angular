import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClrAlertModule } from '@clr/angular';

@Component({
  standalone: true,
  selector: 'app-applicant',
  imports: [ClrAlertModule],
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicantComponent {}
