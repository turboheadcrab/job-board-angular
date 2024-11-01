import { Component, inject, signal } from '@angular/core';
import { Job } from '../../../shared/model/job.model';
import { JobService } from '../../../core/service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  #jobService = inject(JobService);
  #activatedRoute = inject(ActivatedRoute);
  #router = inject(Router);

  job = signal<Job | undefined>(undefined);

  constructor() {
    const jobId = +this.#activatedRoute.snapshot.params['id'];
    this.job.set(this.#jobService.getJob(jobId));
  }

  applyForJob() {
    if (this.job()) {
      this.#router.navigate(['/jobs', this.job()?.id, 'apply']);
    }
  }
}
