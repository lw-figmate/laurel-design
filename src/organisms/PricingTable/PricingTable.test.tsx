import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PricingTable } from './PricingTable';
import type { PricingTier, PricingFeature } from './PricingTable.types';

const tiers: PricingTier[] = [
  { id: 'free', name: 'Free', price: '$0/mo' },
  { id: 'pro', name: 'Pro', price: '$9/mo', highlighted: true, ctaLabel: 'Upgrade' },
  { id: 'enterprise', name: 'Enterprise', price: '$49/mo', description: 'For teams' },
];

const features: PricingFeature[] = [
  { name: 'Users', tiers: { free: '1', pro: '10', enterprise: 'Unlimited' } },
  { name: 'Storage', tiers: { free: '1 GB', pro: '100 GB', enterprise: '1 TB' } },
  { name: 'SSO', tiers: { free: false, pro: false, enterprise: true } },
];

describe('PricingTable', () => {
  it('renders all tier names', () => {
    render(<PricingTable tiers={tiers} features={features} />);
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
  });

  it('renders tier prices', () => {
    render(<PricingTable tiers={tiers} features={features} />);
    expect(screen.getByText('$0/mo')).toBeInTheDocument();
    expect(screen.getByText('$9/mo')).toBeInTheDocument();
    expect(screen.getByText('$49/mo')).toBeInTheDocument();
  });

  it('renders feature names', () => {
    render(<PricingTable tiers={tiers} features={features} />);
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Storage')).toBeInTheDocument();
    expect(screen.getByText('SSO')).toBeInTheDocument();
  });

  it('renders string feature values', () => {
    render(<PricingTable tiers={tiers} features={features} />);
    expect(screen.getByText('Unlimited')).toBeInTheDocument();
    expect(screen.getByText('1 TB')).toBeInTheDocument();
  });

  it('renders tier description', () => {
    render(<PricingTable tiers={tiers} features={features} />);
    expect(screen.getByText('For teams')).toBeInTheDocument();
  });

  it('renders custom CTA label', () => {
    render(<PricingTable tiers={tiers} features={features} />);
    expect(screen.getByText('Upgrade')).toBeInTheDocument();
  });

  it('calls onTierSelect when CTA is clicked', () => {
    const onTierSelect = vi.fn();
    render(<PricingTable tiers={tiers} features={features} onTierSelect={onTierSelect} />);
    fireEvent.click(screen.getByText('Upgrade'));
    expect(onTierSelect).toHaveBeenCalledWith('pro');
  });

  it('renders highlight badge', () => {
    render(<PricingTable tiers={tiers} features={features} highlightBadge={<span>Popular</span>} />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<PricingTable ref={ref} tiers={tiers} features={features} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
