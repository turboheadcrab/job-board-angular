import { QuestionType, Section } from '../model/question.model';

export const QUESTION_SECTIONS: Section[] = [
  {
    key: 'section1',
    label: 'Tell us about yourself',
    isRepeatable: false,
    questions: [
      {
        key: 'question1',
        label: 'First Name',
        type: QuestionType.Text,
        isRequired: true,
        isABranch: false,
        placeholder: 'John',
        helperText: 'Enter your first name',
      },
      {
        key: 'question2',
        label: 'Last Name',
        type: QuestionType.Text,
        isRequired: true,
        isABranch: false,

        placeholder: 'Doe',
        helperText: 'Enter your last name',
      },
      {
        key: 'question3',
        label: 'Phone Number',
        type: QuestionType.Tel,
        isABranch: false,

        isRequired: true,
        placeholder: '+1 (555) 555-5555',
      },
      {
        key: 'question4',
        label: 'Email',
        type: QuestionType.Email,
        isABranch: false,

        isRequired: true,
        placeholder: 'email@example.com',
      },
      {
        key: 'question5',
        label: 'Are you authorized to work in the United States?',
        type: QuestionType.Radio,
        isABranch: false,

        isRequired: true,
        options: [
          {
            key: 'question5option1',
            label: 'Yes',
          },
          {
            key: 'question5option2',
            label: 'No',
          },
        ],
      },
      {
        key: 'question6',
        label: 'Are you willing to submit to a background check?',
        type: QuestionType.Radio,
        isABranch: false,

        isRequired: true,
        options: [
          {
            key: 'question6option1',
            label: 'Yes',
          },
          {
            key: 'question6option2',
            label: 'No',
          },
        ],
      },
      {
        key: 'question7',
        label:
          'Have you ever worked at any location with GM Management? If yes, please list locations',
        type: QuestionType.Text,
        isABranch: false,
        isRequired: false,
        placeholder: 'N/A',
      },
      {
        key: 'question8',
        label: 'What location are you applying to?',
        type: QuestionType.Radio,
        isABranch: false,
        isRequired: true,
        options: [
          {
            key: 'question8option1',
            label: 'Azul Cantina',
          },
          {
            key: 'question8option2',
            label: 'Junction 35 - Pigeon Forge',
          },
          {
            key: 'question8option3',
            label: 'Junction 35 - Sevierville',
          },
          {
            key: 'question8option4',
            label: 'Red Rooster',
          },
          {
            key: 'question8option5',
            label: 'Any location',
          },
        ],
      },
      {
        key: 'question9',
        label: 'What position are you applying for?',
        type: QuestionType.Radio,
        isABranch: true,
        isRequired: true,
        options: [
          {
            key: 'positionOption1',
            label: 'Host',
          },
          {
            key: 'positionOption2',
            label: 'Busser',
          },
          {
            key: 'positionOption3',
            label: 'Food Runner',
          },
          {
            key: 'positionOption4',
            label: 'Server',
          },
          {
            key: 'positionOption5',
            label: 'Bartender',
          },
          {
            key: 'positionOption6',
            label: 'Line Cook',
          },
          {
            key: 'positionOption7',
            label: 'Prep Cook',
          },
          {
            key: 'positionOption8',
            label: 'Dishwasher',
          },
          {
            key: 'positionOption9',
            label: 'Distillery Sampler',
          },
          {
            key: 'positionOption10',
            label: 'Manager',
          },
          {
            key: 'positionOption11',
            label: 'Any',
          },
        ],
      },
      {
        key: 'howDidYouHearSelect',
        label: 'How did you hear about this job?',
        type: QuestionType.Radio,
        isABranch: false,
        isRequired: true,
        options: [
          {
            key: 'howDidYouHearSelectOption1',
            label: 'Social Media',
          },
          {
            key: 'howDidYouHearSelectOption2',
            label: 'Walk In',
          },
          {
            key: 'howDidYouHearSelectOption3',
            label: 'Other',
          },
          {
            key: 'howDidYouHearSelectOption4',
            label: 'Referral',
          },
        ],
      },
      {
        key: 'howDidYouHearText',
        label: 'Tell us how you heard about us',
        type: QuestionType.Text,
        isABranch: false,
        isRequired: false,
      },
      {
        key: 'referee',
        label: 'If someone referred you, please write name of employee',
        type: QuestionType.Text,
        isABranch: true,
        isRequired: false,
      },
      {
        key: 'scheduleRestrictions',
        label: 'Do you have any schedule restrictions? If yes, please explain',
        type: QuestionType.TextArea,
        isABranch: false,
        isRequired: true,
      },
      {
        key: 'startDateAvailability',
        label: 'When are you available to start?',
        type: QuestionType.Date,
        isABranch: false,
        isRequired: true,
      },
    ],
  },
  {
    key: 'section2',
    label: 'Tell us about your experience',
    isRepeatable: true,
    questions: [
      {
        key: 'companyName',
        label: 'Company name',
        type: QuestionType.Text,
        isRequired: true,
        isABranch: false,
      },
      {
        key: 'role',
        label: 'Role',
        type: QuestionType.Text,
        isRequired: true,
        isABranch: false,
      },
      {
        key: 'experience',
        label: 'Experience',
        type: QuestionType.Radio,
        isRequired: true,
        isABranch: false,
        options: [
          {
            key: 'experienceOption1',
            label: '0-3 Months',
          },
          {
            key: 'experienceOption2',
            label: '3-6 Months',
          },
          {
            key: 'experienceOption3',
            label: '6-12 Months',
          },
          {
            key: 'experienceOption4',
            label: '1-2 Years',
          },
          {
            key: 'experienceOption5',
            label: '2-5 Years',
          },
          {
            key: 'experienceOption6',
            label: '5+ Years',
          },
        ],
      },
      {
        key: 'leavingReason',
        label: 'What was your reason for leaving?',
        type: QuestionType.Text,
        isRequired: true,
        isABranch: false,
      },
      {
        key: 'canContactExEmployer',
        label: 'Are we able to contact your employer?',
        type: QuestionType.Radio,
        isRequired: true,
        isABranch: false,
      },
    ],
  },
  {
    key: 'section3',
    label: 'Anything else you would like to share?',
    isRepeatable: false,
    questions: [
      {
        key: 'question1',
        label:
          'Provide details about education, certifications, or any other relevant information.',
        type: QuestionType.TextArea,
        isRequired: false,
        isABranch: false,
        helperText:
          'Tip: Candidates who add additional details typically receive more responses!',
      },
    ],
  },
];
