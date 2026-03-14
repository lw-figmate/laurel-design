import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with status role', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has default "Loading" screen-reader text', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('uses custom label', () => {
    render(<Spinner label="Saving" />);
    expect(screen.getByText('Saving')).toBeInTheDocument();
  });

  it('applies md size by default', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-6');
  });

  it('applies sm size classes', () => {
    const { container } = render(<Spinner size="sm" />);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-4');
  });

  it('applies lg size classes', () => {
    const { container } = render(<Spinner size="lg" />);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-8');
  });

  it('applies xl size classes', () => {
    const { container } = render(<Spinner size="xl" />);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-12');
  });

  it('merges custom className', () => {
    render(<Spinner className="my-custom" />);
    expect(screen.getByRole('status').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('hides the SVG from assistive technology', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});
