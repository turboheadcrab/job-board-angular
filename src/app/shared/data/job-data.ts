import { Job } from '../model/job.model';

export const JOBS: Job[] = [
  {
    id: 2,
    title: 'Kitchen Manager',
    department: 'Azul Cantina',
    location: 'Pigeon Forge, TN',
    datePosted: new Date('2024-11-13'),
    jobType: 'Full-time',
    description:
      'Azul Cantina is seeking a dedicated and experienced Kitchen Manager to oversee our kitchen operations. The ideal candidate will have a strong culinary background paired with leadership skills to ensure exceptional food quality and a smooth kitchen workflow. As the Kitchen Manager, you will be responsible for managing kitchen staff, maintaining inventory, and creating an environment that fosters teamwork and creativity.',
    responsibilities: [
      'Supervise and coordinate daily kitchen operations and staffing.',
      'Oversee the preparation and presentation of menu items to ensure quality and consistency.',
      'Help develop and implement kitchen policies and procedures that promote food safety and sanitation standards.',
      'Manage inventory levels conducting regular inventory counts, ordering supplies, and ensuring the kitchen is well stocked and ready for production.',
      'Analyze inventory data to minimize waste and optimize food costs.',
      'Train and mentor kitchen staff, providing guidance on food preparation and cooking techniques.',
      'Assist in menu planning and development, incorporating seasonal ingredients and guest feedback.',
      'Monitor food costs and labor expenses, making recommendations for improvements.',
      'Ensure a safe and efficient working environment for all kitchen employees.',
      'Foster positive communication and collaboration among kitchen and front-of-house staff.',
    ],
    qualifications: [
      'Previous experience as a Kitchen Manager or in a similar leadership role in the restaurant industry is required.',
      'Comprehensive knowledge of culinary techniques and food safety regulations.',
      'Food safety certification. (ServSafe)',
      'Strong leadership and team management skills, with the ability to inspire others.',
      'Excellent organizational and multitasking abilities in a fast-paced environment.',
      'A passion for Mexican cuisine and a commitment to quality food preparation.',
      'Flexibility to work varied hours, including evenings, weekends, and holidays.',
    ],
    benefits: [
      'Competitive salary based on experience.',
      'Employee discounts on meals and merchandise.',
      'Paid time off.',
      'Dental, health, and vision insurance.',
      'Opportunities for professional development and growth within our expanding brand.',
      'Supportive and engaging work environment that values teamwork and creativity.',
    ],
  },
  {
    id: 420,
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
    id: 421,
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
