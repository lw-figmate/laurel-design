import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ScrollAreaProps extends ComponentPropsWithRef<'div'> {
  /** Maximum height (CSS value) */
  maxHeight?: string | number;
  /** Hide scrollbar while preserving scroll functionality */
  hideScrollbar?: boolean;
  /** Scrollable content */
  children: ReactNode;
}
