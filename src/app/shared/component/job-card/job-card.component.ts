import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Job } from '../../model/job.model';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-job-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {
  job = input.required<Job>();
}
