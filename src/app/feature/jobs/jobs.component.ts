import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import type { Job } from '../../shared/model/job.model';
import { JobCardComponent } from '../../shared/component/job-card/job-card.component';
import { JobService } from '../../core/service/job.service';

@Component({
    selector: 'app-jobs',
    imports: [JobCardComponent],
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
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
