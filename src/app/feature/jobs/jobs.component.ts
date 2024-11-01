import { Component, inject, signal } from '@angular/core';
import { JobService } from '../../core/service/job.service';
import { Job } from '../../shared/model/job.model';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  #jobService = inject(JobService);
  #router = inject(Router);

  jobs = signal<Job[]>([]);

  constructor() {
    this.jobs.set(this.#jobService.getJobs());
  }

  viewJobDetails(id: number) {
    this.#router.navigate(['/jobs', id]);
  }
}
