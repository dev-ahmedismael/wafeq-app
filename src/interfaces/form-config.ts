export interface InputConfig {
  type: string;
  label?: string;
  name: string;
  placeholder: string | null;
  value: any;
  options?: { label: string; value: string }[];
  validations?: {
    [key: string]: any;
  };
  errorMessages: {
    [key: string]: string;
  };
  multiple?: boolean;
}

export interface FormOptions {
  submit: any;
  cols: number;
  submitClasses: string;
  inputClasses: string;
}

export type FormConfig = InputConfig[];
