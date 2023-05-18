import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export type InputProps = {
  id: string;
  label: string;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions<FieldValues>;
  errors: FieldErrors;
} & Partial<Pick<HTMLInputElement, 'type'>>;
