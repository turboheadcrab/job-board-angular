export interface Job {
  id: number;
  title: string;
  department?: string;
  location: string;
  datePosted?: Date;
  jobType?: string; // e.g., 'Full-time', 'Part-time', 'Contract'
  description: string;
  responsibilities: string[];
  qualifications: string[];
  footer?: string;
  salaryRange?: string; // Optional field
  benefits?: string[]; // Optional field
  applicationDeadline?: Date; // Optional field
}
