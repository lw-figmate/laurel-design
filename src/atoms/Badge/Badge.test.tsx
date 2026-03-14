import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies default variant', () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText('Tag').className).toContain('--laurel-bg-subtle');
  });

  it('applies primary variant', () => {
    render(<Badge variant="primary">Tag</Badge>);
    expect(screen.getByText('Tag').className).toContain('--laurel-bg-brand-subtle');
  });

  it('applies success variant', () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText('Active').className).toContain('--laurel-text-success');
  });

  it('applies warning variant', () => {
    render(<Badge variant="warning">Pending</Badge>);
    expect(screen.getByText('Pending').className).toContain('--laurel-status-warning');
  });

  it('applies error variant', () => {
    render(<Badge variant="error">Failed</Badge>);
    expect(screen.getByText('Failed').className).toContain('--laurel-text-error');
  });

  it('applies size classes', () => {
    render(<Badge size="sm">3</Badge>);
    expect(screen.getByText('3').className).toContain('--laurel-font-size-xs');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('merges custom className', () => {
    render(<Badge className="extra">Tag</Badge>);
    expect(screen.getByText('Tag').className).toContain('extra');
  });
});
