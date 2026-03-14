import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface HeroSectionProps extends ComponentPropsWithRef<'section'> {
  /** Main headline */
  headline: string;
  /** Supporting subtext */
  subtext?: string;
  /** Primary CTA */
  primaryAction?: ReactNode;
  /** Secondary CTA */
  secondaryAction?: ReactNode;
  /** Background image URL */
  backgroundImage?: string;
  /** Content alignment */
  align?: 'left' | 'center' | 'right';
  /** Optional media element (image, illustration) on the side */
  media?: ReactNode;
}
