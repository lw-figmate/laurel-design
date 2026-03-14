import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label } from './Label';

describe('Label', () => {
  it('renders a label element', () => {
    render(<Label>Name</Label>);
    expect(screen.getByText('Name').tagName).toBe('LABEL');
  });

  it('associates with an input via htmlFor', () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });

  it('shows a required asterisk when required', () => {
    render(<Label required>Name</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('hides the asterisk from assistive technology', () => {
    render(<Label required>Name</Label>);
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not show an asterisk when not required', () => {
    render(<Label>Name</Label>);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('applies disabled styling', () => {
    render(<Label disabled>Name</Label>);
    const label = screen.getByText('Name');
    expect(label.className).toContain('cursor-not-allowed');
    expect(label.className).toContain('--laurel-text-placeholder');
  });

  it('applies normal styling when not disabled', () => {
    render(<Label>Name</Label>);
    expect(screen.getByText('Name').className).toContain('--laurel-text-secondary');
  });

  it('merges custom className', () => {
    render(<Label className="my-custom">Name</Label>);
    expect(screen.getByText('Name').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLLabelElement | null>;
    render(<Label ref={ref}>Name</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
