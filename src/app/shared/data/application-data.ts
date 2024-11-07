import { Question, QuestionType } from '../model/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 'firstName',
    label: 'First Name',
    type: QuestionType.Text,
    required: true,
    placeholder: 'John',
    helperText: 'Enter your first name',
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: QuestionType.Text,
    required: true,
    placeholder: 'Doe',
    helperText: 'Enter your last name',
  },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    type: QuestionType.Tel,
    required: true,
    placeholder: '+1 (555) 555-5555',
  },
  {
    id: 'email',
    label: 'Email',
    type: QuestionType.Email,
    required: true,
    placeholder: 'email@example.com',
  },
  {
    id: 'workAuthorization',
    label: 'Are you authorized to work in the United States?',
    type: QuestionType.Radio,
    required: true,
    options: [
      {
        id: 'workAuthorizationOption1',
        label: 'Yes',
      },
      {
        id: 'workAuthorizationOption2',
        label: 'No',
      },
    ],
  },
  {
    id: 'backgroundCheck',
    label: 'Are you willing to submit to a background check?',
    type: QuestionType.Radio,
    required: true,
    options: [
      {
        id: 'backgroundCheckOption1',
        label: 'Yes',
      },
      {
        id: 'backgroundCheckOption2',
        label: 'No',
      },
    ],
  },
  {
    id: 'previousGmLocations',
    label:
      'Have you ever worked at any location with GM Management? If yes, please list locations.',
    type: QuestionType.Text,
    required: false,
    placeholder: 'N/A',
  },
  {
    id: 'location',
    label: 'What location are you applying to?',
    type: QuestionType.Radio,
    required: true,
    options: [
      {
        id: 'locationOption1',
        label: 'Azul Cantina',
      },
      {
        id: 'locationOption2',
        label: 'Junction 35 - Pigeon Forge',
      },
      {
        id: 'locationOption3',
        label: 'Junction 35 - Sevierville',
      },
      {
        id: 'locationOption4',
        label: 'Red Rooster',
      },
      {
        id: 'locationOption5',
        label: 'Any location',
      },
    ],
  },
  {
    id: 'position',
    label: 'What position are you applying for?',
    type: QuestionType.Radio,
    required: true,
    options: [
      {
        id: 'positionOption1',
        label: 'Host',
      },
      {
        id: 'positionOption2',
        label: 'Busser',
      },
      {
        id: 'positionOption3',
        label: 'Food Runner',
      },
      {
        id: 'positionOption4',
        label: 'Server',
      },
      {
        id: 'positionOption5',
        label: 'Bartender',
      },
      {
        id: 'positionOption6',
        label: 'Line Cook',
      },
      {
        id: 'positionOption7',
        label: 'Prep Cook',
      },
      {
        id: 'positionOption8',
        label: 'Dishwasher',
      },
      {
        id: 'positionOption9',
        label: 'Distillery Sampler',
      },
      {
        id: 'positionOption10',
        label: 'Manager',
      },
      {
        id: 'positionOption11',
        label: 'Any',
      },
    ],
  },
  {
    id: 'howDidYouHearSelect',
    label: 'How did you hear about this job?',
    type: QuestionType.Radio,
    required: true,
    options: [
      {
        id: 'howDidYouHearSelectOption1',
        label: 'Social Media',
      },
      {
        id: 'howDidYouHearSelectOption2',
        label: 'Walk In',
      },
      {
        id: 'howDidYouHearSelectOption3',
        label: 'Other',
      },
      {
        id: 'howDidYouHearSelectOption4',
        label: 'Referral',
      },
    ],
  },
  {
    id: 'howDidYouHearText',
    label: 'Tell us how you heard about us',
    type: QuestionType.Text,
    required: false,
  },
  {
    id: 'referee',
    label: 'If someone referred you, please write name of employee',
    type: QuestionType.Text,
    required: false,
  },
];
