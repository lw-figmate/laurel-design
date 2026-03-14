import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatDashboard } from './StatDashboard';

const stats = [
  { label: 'Revenue', value: '$12,345', trend: 'up' as const, helpText: '+12%' },
  { label: 'Users', value: '1,234', trend: 'down' as const, helpText: '-3%' },
  { label: 'Orders', value: '567' },
  { label: 'Conversion', value: '3.2%' },
];

describe('StatDashboard', () => {
  it('renders all stats', () => {
    render(<StatDashboard stats={stats} />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$12,345')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Conversion')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<StatDashboard stats={stats} title="Overview" />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  it('renders help text', () => {
    render(<StatDashboard stats={stats} />);
    expect(screen.getByText('+12%')).toBeInTheDocument();
    expect(screen.getByText('-3%')).toBeInTheDocument();
  });

  it('applies custom column count', () => {
    const { container } = render(<StatDashboard stats={stats} columns={2} />);
    const grid = container.querySelector('[class*="grid"]');
    expect(grid).toHaveStyle({ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' });
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<StatDashboard ref={ref} stats={stats} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<StatDashboard stats={stats} className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
});
