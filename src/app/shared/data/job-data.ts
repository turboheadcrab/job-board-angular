import { Job } from '../model/job.model';

export const JOBS: Job[] = [
  {
    id: 1,
    title: 'Barback',
    location: 'Sevier County, TN',
    description:
      'As a Barback, you will assist the bartending team in maintaining an efficient and organized bar. Your role is crucial to ensure smooth service by managing inventory, stocking supplies, and helping to keep the bar clean and inviting. We are looking for an individual who is passionate about the hospitality industry and eager to learn and grow within a dynamic team.',
    responsibilities: [
      'Assist bartenders with the preparation and batching.',
      'Stock and replenish supplies, including liquor, mixers, garnishes, glassware, and utensils.',
      'Maintain cleanliness of the bar area, including wiping down counters, cleaning glassware, and disposing of trash.',
      'Prepare garnishes, ice, and other necessary ingredients for cocktails and drinks.',
      'Monitor inventory levels and notify management of shortages or discrepancies.',
      'Assist in setting up and breaking down the bar before and after shifts.',
      'Provide excellent customer service by engaging with guests and ensuring their needs are met.',
      'Follow all health and safety regulations, maintaining a clean and sanitary working environment.',
    ],
    qualifications: [
      'Previous experience as a barback or in a similar role in a fast-paced restaurant or bar setting preferred but not required.',
      'Strong work ethic and ability to work effectively in a team environment.',
      'Willingness to learn about beverages, cocktails, and bar operations.',
      'Excellent communication and interpersonal skills.',
      'Ability to multitask and stay organized under pressure.',
      'Flexibility to work evenings, weekends, and holidays as required.',
      'Must be able to lift up to 50 pounds and stand for extended periods.',
    ],
    benefits: [
      'Competitive pay plus tips.',
      'Opportunities for growth within the company.',
      'Employee discounts on meals and merchandise.',
      'A fun and engaging work environment surrounded by passionate individuals.',
    ],
  },
  {
    id: 2,
    title: 'Kitchen Manager',
    location: 'Sevier County, TN',
    jobType: 'Full-time',
    description:
      'GM Management LLC is seeking a dedicated and experienced Kitchen Manager to oversee our kitchen operations. The ideal candidate will have a strong culinary background paired with leadership skills to ensure exceptional food quality and a smooth kitchen workflow. As the Kitchen Manager, you will be responsible for managing kitchen staff, maintaining inventory, and creating an environment that fosters teamwork and creativity.',
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
    id: 3,
    title: 'Bartender',
    location: 'Sevier County, TN',
    description:
      'GM Management LLC is seeking an experienced and dynamic Bartender to join our bar team. As a Bartender, you will be responsible for creating and serving exceptional craft cocktails and beverages, as well as providing excellent service to our guests. Your passion for mixology, knowledge of spirits, and friendly demeanor will help us deliver a unique and enjoyable experience.',
    responsibilities: [
      'Prepare and serve alcoholic and non-alcoholic beverages in accordance with recipes and bar standards.',
      'Perform bar prep duties including cutting fruits, preparing garnishes, and batching.',
      'Create and craft unique, high-quality cocktails utilizing our premium spirits.',
      'Provide friendly, attentive service to guests seated at the bar and in the dining area.',
      'Maintain a clean and organized bar area, ensuring all equipment and utensils are properly cleaned and sanitized.',
      'Handle cash and card transactions accurately and securely.',
      'Monitor inventory levels and notify manager of any needs to maintain smooth bar operations.',
      'Engage with guests, offering recommendations and answering any questions about our spirits and cocktail offerings.',
      'Adhere to all health and safety regulations regarding alcohol service.',
    ],
    qualifications: [
      'Previous bartending experience in a fast-paced environment is preferred.',
      'Knowledge of mixology, beer, wine, and cocktail preparation.',
      'Strong communication and interpersonal skills.',
      'Ability to multitask and work efficiently under pressure.',
      'Must be at least 18 years old and possess a TABC permit.',
      'Flexibility to work evenings, weekends, and holidays.',
      'Must be able to lift up to 50 pounds and stand for extended periods.',
    ],
    benefits: [
      'Competitive pay plus tips.',
      'Opportunities for growth within the company.',
      'Employee discounts on meals and our exclusive spirits.',
      'A fun and engaging work environment surrounded by passionate individuals.',
    ],
  },
  {
    id: 4,
    title: 'Dishwasher',
    location: 'Sevier County, TN',
    description:
      'GM Management LLC is looking for a reliable and hardworking Dishwasher to join our kitchen team. As a Dishwasher, you will play a crucial role in maintaining cleanliness and organization in our kitchen and dining areas. Your hard work will ensure that our culinary staff has what they need to deliver exceptional meals to our guests, contributing to our commitment to quality service.',
    responsibilities: [
      'Wash and sanitize all dishes, pots, pans, and utensils using commercial dishwashing equipment.',
      'Maintain cleanliness of the dishwashing area and kitchen, including mopping floors and cleaning surfaces.',
      'Organize and store clean dishes and utensils in their designated areas.',
      'Assist kitchen staff by helping with food preparation as needed.',
      'Monitor dishwashing supplies and notify management when inventory is low.',
      'Follow all health and safety regulations and maintain a clean working environment.',
      'Work efficiently during busy service times and assist with other tasks as assigned by the kitchen manager or chef.',
    ],
    qualifications: [
      'Previous experience as a dishwasher or in a similar role is preferred but not required.',
      'Ability to work in a fast-paced environment and stay organized under pressure.',
      'Strong attention to detail and commitment to cleanliness and hygiene.',
      'Good communication skills and ability to work well within a team.',
      'Flexibility to work evenings, weekends, and holidays as needed.',
      'Must be able to lift up to 50 pounds and stand for extended periods.',
    ],
    benefits: [
      'Competitive pay.',
      'Opportunities for advancement within the kitchen team.',
      'Employee discounts on meals and our range of exclusive Junction 35 spirits.',
      'A fun and engaging work environment that values hard work and dedication.',
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

export const FOOTER =
  '*GM Management LLC is an equal opportunity employer and values diversity in our workforce. We welcome applicants from all backgrounds.';
