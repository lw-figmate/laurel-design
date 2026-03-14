import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface MultiStepFormStep {
  /** Step title shown in stepper */
  title: string;
  /** Optional description */
  description?: string;
  /** Step content */
  content: ReactNode;
  /** Validation function — return true if step is valid */
  validate?: () => boolean;
}

export interface MultiStepFormProps extends Omit<ComponentPropsWithRef<'div'>, 'onSubmit'> {
  /** Step definitions */
  steps: MultiStepFormStep[];
  /** Called when final step submits */
  onSubmit: () => void;
  /** Called when cancelled */
  onCancel?: () => void;
  /** Stepper orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Label for next button (default: 'Next') */
  nextLabel?: string;
  /** Label for previous button (default: 'Back') */
  backLabel?: string;
  /** Label for submit button (default: 'Submit') */
  submitLabel?: string;
}
