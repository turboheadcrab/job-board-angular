import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClrAlertModule } from '@clr/angular';

@Component({
  standalone: true,
  selector: 'app-employee',
  imports: [ClrAlertModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {}
