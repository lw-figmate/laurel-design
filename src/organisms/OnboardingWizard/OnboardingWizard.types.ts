import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface OnboardingStep {
  /** Step title */
  title: string;
  /** Step description */
  description?: string;
  /** Illustration or media element */
  illustration?: ReactNode;
  /** Step content (form fields, selections) */
  content?: ReactNode;
}

export interface OnboardingWizardProps extends ComponentPropsWithRef<'div'> {
  /** Wizard steps */
  steps: OnboardingStep[];
  /** Called on completion */
  onComplete: () => void;
  /** Called when skipped */
  onSkip?: () => void;
  /** Complete button label (default: 'Get started') */
  completeLabel?: string;
  /** Skip button label (default: 'Skip') */
  skipLabel?: string;
}
