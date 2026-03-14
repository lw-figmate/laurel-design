import type { InputProps } from '../../atoms/Input/Input.types';

export interface FormFieldProps extends InputProps {
  /** Label text displayed above the input */
  label: string;
  /** Error message displayed below the input */
  errorMessage?: string;
  /** Helper text displayed below the input (hidden when errorMessage is set) */
  helperText?: string;
  /** Make the field visually required */
  required?: boolean;
}
