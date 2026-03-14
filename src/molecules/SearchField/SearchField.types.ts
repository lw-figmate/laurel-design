import type { InputProps } from '../../atoms/Input/Input.types';

export interface SearchFieldProps extends Omit<InputProps, 'type'> {
  /** Called when the user submits the search (Enter key) */
  onSearch?: (value: string) => void;
  /** Called when the clear button is clicked */
  onClear?: () => void;
}
