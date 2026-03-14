import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ScrollAreaProps extends ComponentPropsWithRef<'div'> {
  /** Maximum height (CSS value) */
  maxHeight?: string | number;
  /** Scrollable content */
  children: ReactNode;
}
