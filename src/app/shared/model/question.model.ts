export interface Section {
  key: string;
  label: string;
  isRepeatable: boolean;
  questions: Question[];
}
export interface Question {
  key: string;
  label: string;
  type: QuestionType;
  isRequired: boolean;
  isABranch: boolean;
  placeholder?: string;
  helperText?: string;
  options?: Option[];
  conditional?: Option;
}

export interface Option {
  key: string;
  label: string;
}

export enum QuestionType {
  Checkbox = 'checkbox',
  Date = 'date',
  DateTime = 'datetime',
  Email = 'email',
  Radio = 'radio',
  Tel = 'tel',
  Text = 'text',
  TextArea = 'textarea',
  Time = 'time',
  Select = 'select',
}
