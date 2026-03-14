import type { ComponentPropsWithRef } from 'react';

export interface SkeletonProps extends ComponentPropsWithRef<'div'> {
  /** Shape variant */
  variant?: 'rect' | 'circle' | 'text';
  /** Width (CSS value) */
  width?: string | number;
  /** Height (CSS value) */
  height?: string | number;
  /** Number of text lines (only for variant="text") */
  lines?: number;
}
