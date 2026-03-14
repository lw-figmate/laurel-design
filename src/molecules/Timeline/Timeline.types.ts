import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TimelineProps extends ComponentPropsWithRef<'div'> {
  /** Timeline items */
  children: ReactNode;
}

export interface TimelineItemProps extends ComponentPropsWithRef<'div'> {
  /** Icon or dot for the timeline marker */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Description or timestamp */
  description?: string;
  /** Variant determines marker color */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}
