import { Routes } from '@angular/router';

export const jobsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./jobs.component').then((m) => m.JobsComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./job-details/job-details.component').then(
        (m) => m.JobDetailsComponent,
      ),
  },
  {
    path: ':id/apply',
    loadComponent: () =>
      import('./job-details/apply/apply.component').then(
        (m) => m.ApplyComponent,
      ),
  },
];
