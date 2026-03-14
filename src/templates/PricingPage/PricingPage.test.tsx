import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PricingPage } from './PricingPage';

describe('PricingPage', () => {
  const defaultTiers = [
    { id: 'free', name: 'Free', price: '$0/mo' },
    { id: 'pro', name: 'Pro', price: '$29/mo', highlighted: true },
  ];

  it('renders default title', () => {
    render(<PricingPage tiers={defaultTiers} />);
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument();
  });

  it('renders custom title', () => {
    render(<PricingPage tiers={defaultTiers} title="Plans & Pricing" />);
    expect(screen.getByRole('heading', { name: 'Plans & Pricing' })).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<PricingPage tiers={defaultTiers} subtitle="Choose the plan that works for you" />);
    expect(screen.getByText('Choose the plan that works for you')).toBeInTheDocument();
  });

  it('renders tier names from PricingTable', () => {
    render(<PricingPage tiers={defaultTiers} />);
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('renders billing toggle', () => {
    render(<PricingPage tiers={defaultTiers} billingToggle={<button>Monthly / Annual</button>} />);
    expect(screen.getByRole('button', { name: 'Monthly / Annual' })).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<PricingPage tiers={defaultTiers} faq={<div>FAQ content</div>} />);
    expect(screen.getByText('FAQ content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<PricingPage ref={ref} tiers={defaultTiers} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
