import { Injectable } from '@angular/core';
import { Job } from '../../shared/model/job.model';
import { JOBS } from '../../shared/data/job-data';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  #jobs: Job[] = JOBS;

  getJobs(): Job[] {
    return this.#jobs;
  }

  getJob(id: number): Job {
    const foundJob = this.#jobs.find((job) => job.id === id);
    if (!foundJob) {
      throw new Error('Job not found');
    }
    return foundJob;
  }
}
