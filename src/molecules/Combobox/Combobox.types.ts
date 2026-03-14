import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ComboboxProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange' | 'onSelect'> {
  /** Placeholder text */
  placeholder?: string;
  /** Options to display */
  options: ComboboxOption[];
  /** Selected value */
  value?: string;
  /** Called when value changes */
  onValueChange?: (value: string) => void;
  /** Called when input text changes (for filtering) */
  onInputChange?: (input: string) => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Content to show when no options match */
  emptyMessage?: ReactNode;
}

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}
