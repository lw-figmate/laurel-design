export const SELECT_SIZES = ['sm', 'md', 'lg'] as const;

export type SelectSize = (typeof SELECT_SIZES)[number];

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Visual size of the select */
  selectSize?: SelectSize;
  /** Show error styling */
  error?: boolean;
  /** Placeholder option text (renders a disabled first option) */
  placeholder?: string;
}
