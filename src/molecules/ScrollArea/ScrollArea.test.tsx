import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ScrollArea } from './ScrollArea';

describe('ScrollArea', () => {
  it('renders children', () => {
    render(<ScrollArea>Scroll content</ScrollArea>);
    expect(screen.getByText('Scroll content')).toBeInTheDocument();
  });

  it('applies maxHeight as number', () => {
    const { container } = render(<ScrollArea maxHeight={200}>Content</ScrollArea>);
    const div = container.firstChild as HTMLElement;
    expect(div.style.maxHeight).toBe('200px');
  });

  it('applies maxHeight as string', () => {
    const { container } = render(<ScrollArea maxHeight="50vh">Content</ScrollArea>);
    const div = container.firstChild as HTMLElement;
    expect(div.style.maxHeight).toBe('50vh');
  });

  it('has overflow-auto class', () => {
    const { container } = render(<ScrollArea>Content</ScrollArea>);
    const div = container.firstChild as HTMLElement;
    expect(div.getAttribute('class')).toContain('overflow-auto');
  });

  it('applies custom className', () => {
    const { container } = render(<ScrollArea className="custom">Content</ScrollArea>);
    const div = container.firstChild as HTMLElement;
    expect(div.getAttribute('class')).toContain('custom');
  });
});
