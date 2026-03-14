import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface FilterSection {
  /** Section label */
  title: string;
  /** Section content (CheckboxGroup, RadioGroup, Slider, etc.) */
  content: ReactNode;
  /** Whether section starts open (default: true) */
  defaultOpen?: boolean;
}

export interface FilterPanelProps extends ComponentPropsWithRef<'div'> {
  /** Panel heading */
  title?: string;
  /** Filter sections */
  sections: FilterSection[];
  /** Called when filters are cleared */
  onClear?: () => void;
  /** Clear button label (default: 'Clear all') */
  clearLabel?: string;
}
