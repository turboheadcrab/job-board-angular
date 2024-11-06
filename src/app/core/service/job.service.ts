import { Injectable } from '@angular/core';
import { Job } from '../../shared/model/job.model';
import { JOBS } from '../../shared/data/job-data';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  #jobs: Job[] = JOBS;

  getJobs(): Observable<Job[]> {
    return of(this.#jobs);
  }

  getJob(id: number): Observable<Job> {
    const foundJob: Job | undefined = this.#jobs.find(
      (job: Job) => job.id === id,
    );
    if (!foundJob) {
      return throwError(() => new Error(`Job with id ${id} not found`));
    }
    return of(foundJob);
  }
}
