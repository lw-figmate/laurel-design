import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AuthPageProps extends ComponentPropsWithRef<'div'> {
  /** The auth form content (e.g. LoginForm, sign-up form) */
  children: ReactNode;
  /** Brand logo element */
  logo?: ReactNode;
  /** Background image URL for the side panel */
  backgroundImage?: string;
  /** Layout variant */
  variant?: 'split' | 'centered';
  /** Side panel content (only shown in split variant) */
  sideContent?: ReactNode;
  /** Footer element */
  footer?: ReactNode;
}
