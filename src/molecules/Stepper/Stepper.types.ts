import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface StepperProps extends ComponentPropsWithRef<'div'> {
  /** Current active step (0-indexed) */
  activeStep: number;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Step items */
  children: ReactNode;
}

export interface StepProps extends ComponentPropsWithRef<'div'> {
  /** Step label */
  title: string;
  /** Optional description */
  description?: string;
  /** Override step status */
  status?: 'complete' | 'active' | 'inactive';
}
