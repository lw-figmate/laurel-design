import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders a rect skeleton by default', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
    expect(container.firstElementChild!.className).toContain('animate-pulse');
  });

  it('renders a circle skeleton', () => {
    const { container } = render(<Skeleton variant="circle" width={48} />);
    expect(container.firstElementChild!.className).toContain('rounded-full');
    expect(container.firstElementChild).toHaveStyle({ width: '48px', height: '48px' });
  });

  it('renders text skeleton with lines', () => {
    const { container } = render(<Skeleton variant="text" lines={4} />);
    const lines = container.querySelectorAll('[class*="animate-pulse"]');
    expect(lines).toHaveLength(4);
  });

  it('last text line is shorter', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const lines = container.querySelectorAll('[class*="animate-pulse"]');
    const lastLine = lines[lines.length - 1] as HTMLElement;
    expect(lastLine.style.width).toBe('75%');
  });

  it('applies custom width and height to rect', () => {
    const { container } = render(<Skeleton width="200px" height="100px" />);
    expect(container.firstElementChild).toHaveStyle({ width: '200px', height: '100px' });
  });

  it('merges custom className', () => {
    const { container } = render(<Skeleton className="my-custom" />);
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
