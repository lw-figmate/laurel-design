import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Code } from './Code';

describe('Code', () => {
  it('renders inline code by default', () => {
    render(<Code>const x = 1</Code>);
    const el = screen.getByText('const x = 1');
    expect(el.tagName).toBe('CODE');
  });

  it('renders block code in a pre wrapper', () => {
    render(<Code block>const x = 1</Code>);
    const code = screen.getByText('const x = 1');
    expect(code.tagName).toBe('CODE');
    expect(code.parentElement!.tagName).toBe('PRE');
  });

  it('applies inline background styles', () => {
    render(<Code>x</Code>);
    expect(screen.getByText('x').className).toContain('--laurel-bg-subtle');
  });

  it('applies mono font', () => {
    render(<Code>x</Code>);
    expect(screen.getByText('x').className).toContain('--laurel-font-mono');
  });

  it('applies size', () => {
    render(<Code size="lg">x</Code>);
    expect(screen.getByText('x').className).toContain('--laurel-font-size-base');
  });

  it('forwards ref for inline code', () => {
    const ref = { current: null } as React.RefObject<HTMLElement | null>;
    render(<Code ref={ref}>x</Code>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current!.tagName).toBe('CODE');
  });

  it('forwards ref for block code to pre', () => {
    const ref = { current: null } as React.RefObject<HTMLElement | null>;
    render(<Code ref={ref} block>x</Code>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current!.tagName).toBe('PRE');
  });

  it('merges custom className', () => {
    render(<Code className="custom">x</Code>);
    expect(screen.getByText('x').className).toContain('custom');
  });
});
