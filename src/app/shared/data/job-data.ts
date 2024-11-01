import { Job } from '../model/job.model';

export const JOBS: Job[] = [
  {
    id: 1,
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    datePosted: new Date('2023-10-01'),
    jobType: 'Full-time',
    description:
      'We are looking for a skilled Software Engineer to join our team...',
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Participate in code reviews',
    ],
    qualifications: [
      'Bachelor’s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in Angular and TypeScript',
    ],
    salaryRange: '$80,000 - $100,000',
    benefits: ['Health Insurance', '401(k) Match', 'Paid Time Off'],
  },
  {
    id: 2,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    datePosted: new Date('2023-10-05'),
    jobType: 'Part-time',
    description:
      'Seeking a creative Marketing Specialist to enhance our brand...',
    responsibilities: [
      'Develop marketing campaigns',
      'Analyze market trends',
      'Coordinate with the sales team',
    ],
    qualifications: [
      'Bachelor’s degree in Marketing or related field',
      'Experience with digital marketing tools',
      'Excellent communication skills',
    ],
  },
  // Add more job entries as needed
];
