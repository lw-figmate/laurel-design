import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Blockquote } from './Blockquote';

describe('Blockquote', () => {
  it('renders a blockquote element', () => {
    render(<Blockquote>Test quote</Blockquote>);
    const el = screen.getByText('Test quote');
    expect(el.tagName).toBe('BLOCKQUOTE');
  });

  it('applies cite attribute', () => {
    render(<Blockquote cite="https://example.com">Quote</Blockquote>);
    expect(screen.getByText('Quote').getAttribute('cite')).toBe('https://example.com');
  });

  it('applies custom className', () => {
    render(<Blockquote className="custom">Quote</Blockquote>);
    expect(screen.getByText('Quote').getAttribute('class')).toContain('custom');
  });

  it('renders children', () => {
    render(<Blockquote><em>Emphasized quote</em></Blockquote>);
    expect(screen.getByText('Emphasized quote')).toBeInTheDocument();
  });
});
