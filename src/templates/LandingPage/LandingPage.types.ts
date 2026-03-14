import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface LandingPageSection {
  /** Section ID for anchor links */
  id: string;
  /** Section content */
  content: ReactNode;
}

export interface LandingPageProps extends ComponentPropsWithRef<'div'> {
  /** Hero section content */
  hero: ReactNode;
  /** Page sections */
  sections: LandingPageSection[];
  /** Navigation element */
  navigation?: ReactNode;
  /** Footer element */
  footer?: ReactNode;
  /** Call-to-action bar (sticky bottom) */
  cta?: ReactNode;
}
