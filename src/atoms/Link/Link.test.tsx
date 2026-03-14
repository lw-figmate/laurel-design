import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Link } from './Link';

describe('Link', () => {
  it('renders an anchor element', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('sets href', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
  });

  it('applies default variant styling', () => {
    render(<Link href="/">Home</Link>);
    expect(screen.getByRole('link').className).toContain('--laurel-text-brand');
  });

  it('applies subtle variant styling', () => {
    render(<Link href="/" variant="subtle">Home</Link>);
    expect(screen.getByRole('link').className).toContain('--laurel-text-tertiary');
  });

  it('opens externally with secure attributes', () => {
    render(<Link href="https://example.com" external>External</Link>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not set target when not external', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
  });

  it('applies disabled styling and aria-disabled', () => {
    render(<Link href="/about" disabled>About</Link>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('tabindex', '-1');
    expect(link.className).toContain('pointer-events-none');
  });

  it('does not set aria-disabled when not disabled', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-disabled');
  });

  it('merges custom className', () => {
    render(<Link href="/" className="my-custom">Home</Link>);
    expect(screen.getByRole('link').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLAnchorElement | null>;
    render(<Link ref={ref} href="/">Home</Link>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
