import type { ComponentPropsWithRef, ReactNode } from 'react';

export const BLOCKQUOTE_SIZES = ['sm', 'md', 'lg'] as const;
export const BLOCKQUOTE_ACCENTS = ['default', 'neutral', 'primary'] as const;

export type BlockquoteSize = (typeof BLOCKQUOTE_SIZES)[number];
export type BlockquoteAccent = (typeof BLOCKQUOTE_ACCENTS)[number];

export interface BlockquoteProps extends ComponentPropsWithRef<'blockquote'> {
  /** Citation source */
  cite?: string;
  /** Size of the quote text */
  size?: BlockquoteSize;
  /** Accent color for the left border */
  accent?: BlockquoteAccent;
  /** Quote content */
  children: ReactNode;
}
