import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: () =>
      import('./feature/jobs/jobs.routes').then((m) => m.jobsRoutes),
  },
  {
    path: 'applicant',
    loadComponent: () =>
      import('./feature/applicant/applicant.component').then(
        (m) => m.ApplicantComponent,
      ),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./feature/employee/employee.component').then(
        (m) => m.EmployeeComponent,
      ),
  },
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
];
