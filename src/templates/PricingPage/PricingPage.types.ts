import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { PricingTier } from '../../organisms/PricingTable';

export interface PricingPageProps extends ComponentPropsWithRef<'div'> {
  /** Page title */
  title?: string;
  /** Subtitle / description */
  subtitle?: string;
  /** Pricing tiers */
  tiers: PricingTier[];
  /** Feature comparison labels */
  features?: Array<{ name: string; values: Record<string, boolean | string> }>;
  /** Toggle between monthly / annual */
  billingToggle?: ReactNode;
  /** FAQ section */
  faq?: ReactNode;
  /** Call-to-action footer */
  footer?: ReactNode;
}
