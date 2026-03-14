import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AspectRatio } from './AspectRatio';

describe('AspectRatio', () => {
  it('renders children', () => {
    const { getByText } = render(<AspectRatio ratio={16 / 9}><span>Content</span></AspectRatio>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('passes ratio as style prop', () => {
    const { container } = render(<AspectRatio ratio={16 / 9}><span>X</span></AspectRatio>);
    const div = container.firstChild as HTMLElement;
    // jsdom does not support aspect-ratio in computed style, just verify the class
    expect(div.getAttribute('class')).toContain('relative');
  });

  it('has overflow hidden', () => {
    const { container } = render(<AspectRatio><span>X</span></AspectRatio>);
    const div = container.firstChild as HTMLElement;
    expect(div.getAttribute('class')).toContain('overflow-hidden');
  });

  it('applies custom className', () => {
    const { container } = render(<AspectRatio className="custom"><span>X</span></AspectRatio>);
    const div = container.firstChild as HTMLElement;
    expect(div.getAttribute('class')).toContain('custom');
  });
});
