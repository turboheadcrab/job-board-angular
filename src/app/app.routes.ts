import { Routes } from '@angular/router';
import { JobsComponent } from './feature/jobs/jobs.component';
import { ApplicantComponent } from './feature/applicant/applicant.component';
import { EmployeeComponent } from './feature/employee/employee.component';
import { JobDetailsComponent } from './feature/jobs/job-details/job-details.component';

export const routes: Routes = [
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
];
