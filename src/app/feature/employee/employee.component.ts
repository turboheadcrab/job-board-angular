import { Component } from '@angular/core';
import { ClrAlertModule } from '@clr/angular';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ClrAlertModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {}
