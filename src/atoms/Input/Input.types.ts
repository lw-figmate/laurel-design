export const INPUT_SIZES = ['sm', 'md', 'lg'] as const;

export type InputSize = (typeof INPUT_SIZES)[number];

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visual size of the input */
  inputSize?: InputSize;
  /** Show error styling */
  error?: boolean;
}
