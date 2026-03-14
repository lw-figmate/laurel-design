export const CHECKBOX_SIZES = ['sm', 'md', 'lg'] as const;

export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Visual size of the checkbox */
  checkboxSize?: CheckboxSize;
  /** Show indeterminate state */
  indeterminate?: boolean;
}
