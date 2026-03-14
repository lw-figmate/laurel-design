import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders with children', () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders as a p tag by default', () => {
    render(<Text>Paragraph</Text>);
    expect(screen.getByText('Paragraph').tagName).toBe('P');
  });

  it('renders as a custom element', () => {
    render(<Text as="span">Span text</Text>);
    expect(screen.getByText('Span text').tagName).toBe('SPAN');
  });

  it('renders as a label', () => {
    render(<Text as="label">Label text</Text>);
    expect(screen.getByText('Label text').tagName).toBe('LABEL');
  });

  it('applies size classes', () => {
    render(<Text size="lg">Large</Text>);
    expect(screen.getByText('Large').className).toContain('--laurel-font-size-lg');
  });

  it('applies weight classes', () => {
    render(<Text weight="bold">Bold</Text>);
    expect(screen.getByText('Bold').className).toContain('--laurel-font-weight-bold');
  });

  it('applies truncate class', () => {
    render(<Text truncate>Truncated</Text>);
    expect(screen.getByText('Truncated').className).toContain('truncate');
  });

  it('does not apply truncate by default', () => {
    render(<Text>Normal</Text>);
    expect(screen.getByText('Normal').className).not.toContain('truncate');
  });

  it('merges custom className', () => {
    render(<Text className="custom">Custom</Text>);
    expect(screen.getByText('Custom').className).toContain('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLElement | null>;
    render(<Text ref={ref}>Ref</Text>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
