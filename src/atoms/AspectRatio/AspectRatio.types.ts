import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AspectRatioProps extends ComponentPropsWithRef<'div'> {
  /** Width-to-height ratio (e.g. 16/9) */
  ratio?: number;
  /** Content to render inside the ratio container */
  children: ReactNode;
}
