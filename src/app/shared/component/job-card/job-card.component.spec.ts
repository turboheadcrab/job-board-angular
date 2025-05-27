import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardComponent } from './job-card.component';
import { provideRouter } from '@angular/router';
import { Job } from '../../model/job.model';
import { ComponentRef } from '@angular/core';

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let componentRef: ComponentRef<JobCardComponent>;
  let fixture: ComponentFixture<JobCardComponent>;

  const mockJob: Job = {
    id: 1,
    title: 'Test Title',
    location: 'Test Location',
    description: 'Test Description',
    responsibilities: [],
    qualifications: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JobCardComponent);
    componentRef = fixture.componentRef;
    component = fixture.componentInstance;

    componentRef.setInput('job', mockJob);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
