import { Question, QuestionType, Section } from '../model/question.model';

export const QUESTIONS: Question[] = [
  {
    key: 'question1',
    label: 'First Name',
    type: QuestionType.Text,
    required: true,
    isABranch: false,
    placeholder: 'John',
    helperText: 'Enter your first name',
  },
  {
    key: 'question2',
    label: 'Last Name',
    type: QuestionType.Text,
    required: true,
    isABranch: false,

    placeholder: 'Doe',
    helperText: 'Enter your last name',
  },
  {
    key: 'question3',
    label: 'Phone Number',
    type: QuestionType.Tel,
    isABranch: false,

    required: true,
    placeholder: '+1 (555) 555-5555',
  },
  {
    key: 'question4',
    label: 'Email',
    type: QuestionType.Email,
    isABranch: false,

    required: true,
    placeholder: 'email@example.com',
  },
  {
    key: 'question5',
    label: 'Are you authorized to work in the United States?',
    type: QuestionType.Radio,
    isABranch: false,

    required: true,
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

    required: true,
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
    required: false,
    placeholder: 'N/A',
  },
  {
    key: 'question8',
    label: 'What location are you applying to?',
    type: QuestionType.Radio,
    isABranch: false,
    required: true,
    options: [
      {
        key: 'question6option1',
        label: 'Azul Cantina',
      },
      {
        key: 'question6option2',
        label: 'Junction 35 - Pigeon Forge',
      },
      {
        key: 'question6option3',
        label: 'Junction 35 - Sevierville',
      },
      {
        key: 'question6option4',
        label: 'Red Rooster',
      },
      {
        key: 'question6option5',
        label: 'Any location',
      },
    ],
  },
  {
    key: 'question9',
    label: 'What position are you applying for?',
    type: QuestionType.Radio,
    isABranch: true,
    required: true,
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
    required: true,
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
    required: false,
  },
  {
    key: 'referee',
    label: 'If someone referred you, please write name of employee',
    type: QuestionType.Text,
    isABranch: true,
    required: false,
  },
  {
    key: 'scheduleRestrictions',
    label: 'Do you have any schedule restrictions? If yes, please explain',
    type: QuestionType.TextArea,
    isABranch: false,
    required: true,
  },
  {
    key: 'startDateAvailability',
    label: 'When are you available to start?',
    type: QuestionType.Date,
    isABranch: false,
    required: true,
  },
];

export const QUESTION_SECTIONS: Section[] = [
  {
    key: 'applicant',
    label: 'Tell us about yourself',
    questions: [
      {
        key: 'question1',
        label: 'First Name',
        type: QuestionType.Text,
        required: true,
        isABranch: false,
        placeholder: 'John',
        helperText: 'Enter your first name',
      },
      {
        key: 'question2',
        label: 'Last Name',
        type: QuestionType.Text,
        required: true,
        isABranch: false,

        placeholder: 'Doe',
        helperText: 'Enter your last name',
      },
      {
        key: 'question3',
        label: 'Phone Number',
        type: QuestionType.Tel,
        isABranch: false,

        required: true,
        placeholder: '+1 (555) 555-5555',
      },
      {
        key: 'question4',
        label: 'Email',
        type: QuestionType.Email,
        isABranch: false,

        required: true,
        placeholder: 'email@example.com',
      },
      {
        key: 'question5',
        label: 'Are you authorized to work in the United States?',
        type: QuestionType.Radio,
        isABranch: false,

        required: true,
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

        required: true,
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
        required: false,
        placeholder: 'N/A',
      },
      {
        key: 'question8',
        label: 'What location are you applying to?',
        type: QuestionType.Radio,
        isABranch: false,
        required: true,
        options: [
          {
            key: 'question6option1',
            label: 'Azul Cantina',
          },
          {
            key: 'question6option2',
            label: 'Junction 35 - Pigeon Forge',
          },
          {
            key: 'question6option3',
            label: 'Junction 35 - Sevierville',
          },
          {
            key: 'question6option4',
            label: 'Red Rooster',
          },
          {
            key: 'question6option5',
            label: 'Any location',
          },
        ],
      },
      {
        key: 'question9',
        label: 'What position are you applying for?',
        type: QuestionType.Radio,
        isABranch: true,
        required: true,
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
        required: true,
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
        required: false,
      },
      {
        key: 'referee',
        label: 'If someone referred you, please write name of employee',
        type: QuestionType.Text,
        isABranch: true,
        required: false,
      },
      {
        key: 'scheduleRestrictions',
        label: 'Do you have any schedule restrictions? If yes, please explain',
        type: QuestionType.TextArea,
        isABranch: false,
        required: true,
      },
      {
        key: 'startDateAvailability',
        label: 'When are you available to start?',
        type: QuestionType.Date,
        isABranch: false,
        required: true,
      },
    ],
  },
  {
    key: 'experience',
    label: 'Tell us about your experience',
    questions: [
      {
        key: 'companyName',
        label: 'Company name',
        type: QuestionType.Text,
        required: true,
        isABranch: false,
      },
      {
        key: 'role',
        label: 'Role',
        type: QuestionType.Text,
        required: true,
        isABranch: false,
      },
      {
        key: 'experience',
        label: 'Experience',
        type: QuestionType.Radio,
        required: true,
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
        required: true,
        isABranch: false,
      },
      {
        key: 'canContactExEmployer',
        label: 'Are we able to contact your employer?',
        type: QuestionType.Radio,
        required: true,
        isABranch: false,
      },
    ],
  },
  {
    key: 'anythingElse',
    label: 'Anything else you would like to share?',
    questions: [
      {
        key: 'anythingElse',
        label:
          'Provide details about education, certifications, or any other relevant information. Tip: Candidates\n' +
          'who add additional details typically receive more responses!',
        type: QuestionType.TextArea,
        required: false,
        isABranch: false,
      },
    ],
  },
];
