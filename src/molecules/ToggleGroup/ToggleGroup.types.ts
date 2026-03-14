import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ToggleGroupProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Currently selected value(s) */
  value?: string | string[];
  /** Default value (uncontrolled) */
  defaultValue?: string | string[];
  /** Called when selection changes */
  onValueChange?: (value: string | string[]) => void;
  /** Allow multiple selection */
  multiple?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Toggle items */
  children: ReactNode;
}

export interface ToggleGroupItemProps extends ComponentPropsWithRef<'button'> {
  /** Unique value */
  value: string;
  /** Disabled state */
  disabled?: boolean;
  /** Item content */
  children: ReactNode;
}
