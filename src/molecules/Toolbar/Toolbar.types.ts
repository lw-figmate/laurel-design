import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ToolbarProps extends ComponentPropsWithRef<'div'> {
  /** Toolbar items */
  children: ReactNode;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
}

export interface ToolbarGroupProps extends ComponentPropsWithRef<'div'> {
  /** Group of related toolbar items */
  children: ReactNode;
}
