import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';

import type { Job } from '../../../shared/model/job.model';
import { JobService } from '../../../core/service/job.service';
import { FOOTER } from '../../../shared/data/job-data';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailsComponent {
  #jobService = inject(JobService);

  id = input.required<string>();

  job = signal<Job | undefined>(undefined);

  constructor() {
    toObservable(this.id)
      .pipe(
        switchMap((id: string) => this.#jobService.getJob(Number(id))),
        tap({
          next: (job: Job) => this.job.set(job),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  protected readonly FOOTER = FOOTER;
}
