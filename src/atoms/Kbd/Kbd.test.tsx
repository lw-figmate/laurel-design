import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Kbd } from './Kbd';

describe('Kbd', () => {
  it('renders a kbd element', () => {
    render(<Kbd>⌘K</Kbd>);
    const el = screen.getByText('⌘K');
    expect(el.tagName).toBe('KBD');
  });

  it('applies custom className', () => {
    render(<Kbd className="custom">Ctrl</Kbd>);
    expect(screen.getByText('Ctrl').getAttribute('class')).toContain('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLElement | null>;
    render(<Kbd ref={ref}>A</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
