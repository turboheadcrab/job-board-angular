import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClrAlertModule } from '@clr/angular';
import { AzureTestComponent } from '../../shared/component/azure-test/azure-test.component';

@Component({
  selector: 'app-employee',
  imports: [ClrAlertModule, AzureTestComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {}
