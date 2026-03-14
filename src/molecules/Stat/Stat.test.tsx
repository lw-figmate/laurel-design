import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stat } from './Stat';

describe('Stat', () => {
  it('renders label and value', () => {
    render(<Stat label="Revenue" value="$12,345" />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$12,345')).toBeInTheDocument();
  });

  it('renders help text', () => {
    render(<Stat label="Users" value="1,234" helpText="5% increase" />);
    expect(screen.getByText('5% increase')).toBeInTheDocument();
  });

  it('renders up trend arrow', () => {
    const { container } = render(<Stat label="Users" value="1,234" helpText="+5%" trend="up" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg!.getAttribute('class')).toContain('--laurel-text-success');
  });

  it('renders down trend arrow', () => {
    const { container } = render(<Stat label="Users" value="1,234" helpText="-5%" trend="down" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg!.getAttribute('class')).toContain('--laurel-text-error');
  });

  it('renders icon when provided', () => {
    render(<Stat label="Sales" value="99" icon={<span data-testid="icon">💰</span>} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(<Stat label="X" value="Y" className="my-custom" />);
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Stat ref={ref} label="X" value="Y" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
