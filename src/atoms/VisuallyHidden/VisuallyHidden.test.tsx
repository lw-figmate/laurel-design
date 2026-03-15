import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('renders content that is hidden visually', () => {
    render(<VisuallyHidden>Hidden text</VisuallyHidden>);
    const el = screen.getByText('Hidden text');
    expect(el).toBeInTheDocument();
    expect(el.className).toContain('sr-only');
  });

  it('renders as a span by default', () => {
    render(<VisuallyHidden>Hidden</VisuallyHidden>);
    expect(screen.getByText('Hidden').tagName).toBe('SPAN');
  });

  it('renders as a div when specified', () => {
    render(<VisuallyHidden as="div">Hidden</VisuallyHidden>);
    expect(screen.getByText('Hidden').tagName).toBe('DIV');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
    render(<VisuallyHidden ref={ref}>Hidden</VisuallyHidden>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
