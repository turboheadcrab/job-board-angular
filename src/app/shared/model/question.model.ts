export interface Question {
  id: string;
  label: string;
  type: QuestionType;
  required: boolean;
  placeholder?: string;
  helperText?: string;
  options?: Option[];
}

export interface Option {
  id: string;
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
