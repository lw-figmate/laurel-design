import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with initials', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('truncates initials to 2 characters', () => {
    render(<Avatar initials="ABC" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('uppercases initials', () => {
    render(<Avatar initials="jd" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows fallback when no src or initials', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('renders an image when src is provided', () => {
    render(<Avatar src="https://example.com/img.png" alt="Test" />);
    const imgs = screen.getAllByRole('img', { name: 'Test' });
    expect(imgs.length).toBeGreaterThanOrEqual(1);
    expect(imgs.some((el) => el.tagName === 'IMG')).toBe(true);
  });

  it('uses alt as aria-label', () => {
    render(<Avatar alt="Jane Doe" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Jane Doe');
  });

  it('uses initials as aria-label fallback', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'JD');
  });

  it('applies size classes', () => {
    render(<Avatar size="xl" initials="XL" />);
    expect(screen.getByRole('img').className).toContain('h-16');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
    render(<Avatar ref={ref} initials="R" />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('merges custom className', () => {
    render(<Avatar className="ring-2" initials="C" />);
    expect(screen.getByRole('img').className).toContain('ring-2');
  });
});
