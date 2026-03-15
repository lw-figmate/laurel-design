import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container><span>Child</span></Container>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('applies max-width by default', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstElementChild!.className).toContain('max-w-screen-xl');
  });

  it('applies custom size', () => {
    const { container } = render(<Container size="md">Content</Container>);
    expect(container.firstElementChild!.className).toContain('max-w-screen-md');
  });

  it('centers by default', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstElementChild!.className).toContain('mx-auto');
  });

  it('removes centering when center=false', () => {
    const { container } = render(<Container center={false}>Content</Container>);
    expect(container.firstElementChild!.className).not.toContain('mx-auto');
  });

  it('adds padding by default', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstElementChild!.className).toContain('px-');
  });

  it('removes padding when padding=false', () => {
    const { container } = render(<Container padding={false}>Content</Container>);
    expect(container.firstElementChild!.className).not.toContain('px-');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Container ref={ref}>Content</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    const { container } = render(<Container className="custom">Content</Container>);
    expect(container.firstElementChild!.className).toContain('custom');
  });
});
