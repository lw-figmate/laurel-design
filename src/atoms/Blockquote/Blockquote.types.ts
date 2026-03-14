import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface BlockquoteProps extends ComponentPropsWithRef<'blockquote'> {
  /** Citation source */
  cite?: string;
  /** Quote content */
  children: ReactNode;
}
