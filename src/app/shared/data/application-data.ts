import { Question } from '../model/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    placeholder: 'John',
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    placeholder: 'Doe',
  },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    type: 'tel',
    required: true,
    placeholder: '(555) 555-5555',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'email@example.com',
  },
];
