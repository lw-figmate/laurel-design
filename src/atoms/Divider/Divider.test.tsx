import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders as a separator', () => {
    render(<Divider />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('defaults to horizontal orientation', () => {
    render(<Divider />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('applies vertical orientation', () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('applies horizontal classes', () => {
    render(<Divider />);
    expect(screen.getByRole('separator').className).toContain('border-t');
  });

  it('applies vertical classes', () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole('separator').className).toContain('border-l');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLHRElement | null>;
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLHRElement);
  });

  it('merges custom className', () => {
    render(<Divider className="my-4" />);
    expect(screen.getByRole('separator').className).toContain('my-4');
  });
});
