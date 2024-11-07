import { Component, inject, signal } from '@angular/core';
import { JobService } from '../../core/service/job.service';
import { Job } from '../../shared/model/job.model';
import { SlicePipe } from '@angular/common';
import { JobCardComponent } from '../../shared/component/job-card/job-card.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [SlicePipe, JobCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  #jobService = inject(JobService);

  jobs = signal<Job[]>([]);

  constructor() {
    this.#jobService
      .getJobs()
      .pipe(
        tap({
          next: (response: Job[]) => this.jobs.set(response),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }
}
