import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface PricingFeature {
  /** Feature name */
  name: string;
  /** Availability per tier (true/false/string) */
  tiers: Record<string, boolean | string>;
}

export interface PricingTier {
  /** Unique tier id */
  id: string;
  /** Tier name */
  name: string;
  /** Price display (e.g. "$9/mo") */
  price: string;
  /** Optional description */
  description?: string;
  /** CTA label (default: 'Get Started') */
  ctaLabel?: string;
  /** Whether this tier is highlighted/recommended */
  highlighted?: boolean;
}

export interface PricingTableProps extends ComponentPropsWithRef<'div'> {
  /** Plan tiers */
  tiers: PricingTier[];
  /** Feature comparison rows */
  features: PricingFeature[];
  /** Called when a tier CTA is clicked */
  onTierSelect?: (tierId: string) => void;
  /** Badge content for highlighted tier */
  highlightBadge?: ReactNode;
}
