import { Component, inject, signal } from '@angular/core';
import { JobService } from '../../core/service/job.service';
import { Job } from '../../shared/model/job.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  #jobService = inject(JobService);

  jobs = signal<Job[]>([]);

  constructor() {
    this.jobs.set(this.#jobService.getJobs());
  }
}
