import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { forwardRef } from 'react';
import { IconAdapter } from './IconAdapter';

// Mock external icon component (simulates Lucide/Heroicons)
const MockExternalIcon = forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg ref={ref} data-testid="mock-icon" {...props}>
      <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
    </svg>
  ),
);
MockExternalIcon.displayName = 'MockExternalIcon';

describe('IconAdapter', () => {
  it('renders the external icon component', () => {
    render(<IconAdapter icon={MockExternalIcon} />);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<IconAdapter icon={MockExternalIcon} size="lg" />);
    const svg = screen.getByTestId('mock-icon');
    const cls = svg.getAttribute('class') ?? '';
    expect(cls).toContain('h-6');
    expect(cls).toContain('w-6');
  });

  it('defaults to medium size', () => {
    render(<IconAdapter icon={MockExternalIcon} />);
    const svg = screen.getByTestId('mock-icon');
    const cls = svg.getAttribute('class') ?? '';
    expect(cls).toContain('h-5');
    expect(cls).toContain('w-5');
  });

  it('is decorative by default', () => {
    render(<IconAdapter icon={MockExternalIcon} />);
    expect(screen.getByTestId('mock-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with accessible label', () => {
    render(<IconAdapter icon={MockExternalIcon} label="Rocket" />);
    expect(screen.getByRole('img', { name: 'Rocket' })).toBeInTheDocument();
  });

  it('passes custom className', () => {
    render(<IconAdapter icon={MockExternalIcon} className="text-red-500" />);
    expect(screen.getByTestId('mock-icon').getAttribute('class')).toContain('text-red-500');
  });

  it('forwards ref', () => {
    const ref = { current: null as SVGSVGElement | null };
    render(<IconAdapter ref={ref} icon={MockExternalIcon} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });
});
