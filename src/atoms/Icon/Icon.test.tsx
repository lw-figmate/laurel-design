import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon } from './Icon';

const samplePath = (
  <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
);

describe('Icon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<Icon>{samplePath}</Icon>);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('is decorative (aria-hidden) by default', () => {
    const { container } = render(<Icon>{samplePath}</Icon>);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('is accessible when label is provided', () => {
    render(<Icon label="Close">{samplePath}</Icon>);
    expect(screen.getByRole('img', { name: 'Close' })).toBeInTheDocument();
  });

  it('does not have aria-hidden when label is provided', () => {
    render(<Icon label="Close">{samplePath}</Icon>);
    expect(screen.getByRole('img')).not.toHaveAttribute('aria-hidden');
  });

  it('applies md size by default', () => {
    const { container } = render(<Icon>{samplePath}</Icon>);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-5');
  });

  it('applies xs size classes', () => {
    const { container } = render(<Icon size="xs">{samplePath}</Icon>);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-3');
  });

  it('applies sm size classes', () => {
    const { container } = render(<Icon size="sm">{samplePath}</Icon>);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-4');
  });

  it('applies lg size classes', () => {
    const { container } = render(<Icon size="lg">{samplePath}</Icon>);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-6');
  });

  it('applies xl size classes', () => {
    const { container } = render(<Icon size="xl">{samplePath}</Icon>);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('h-8');
  });

  it('merges custom className', () => {
    const { container } = render(<Icon className="my-custom">{samplePath}</Icon>);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<SVGSVGElement | null>;
    render(<Icon ref={ref}>{samplePath}</Icon>);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('renders children path elements', () => {
    const { container } = render(<Icon>{samplePath}</Icon>);
    expect(container.querySelector('path')).toBeInTheDocument();
  });
});
