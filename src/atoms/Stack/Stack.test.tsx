import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack><span>Child</span></Stack>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('uses column direction by default', () => {
    const { container } = render(<Stack>Content</Stack>);
    expect(container.firstElementChild!.className).toContain('flex-col');
  });

  it('applies row direction', () => {
    const { container } = render(<Stack direction="row">Content</Stack>);
    expect(container.firstElementChild!.className).toContain('flex-row');
  });

  it('applies alignment', () => {
    const { container } = render(<Stack align="center">Content</Stack>);
    expect(container.firstElementChild!.className).toContain('items-center');
  });

  it('applies justify', () => {
    const { container } = render(<Stack justify="between">Content</Stack>);
    expect(container.firstElementChild!.className).toContain('justify-between');
  });

  it('applies gap', () => {
    const { container } = render(<Stack gap="6">Content</Stack>);
    expect(container.firstElementChild!.className).toContain('--laurel-space-6');
  });

  it('applies wrap', () => {
    const { container } = render(<Stack wrap>Content</Stack>);
    expect(container.firstElementChild!.className).toContain('flex-wrap');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Stack ref={ref}>Content</Stack>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    const { container } = render(<Stack className="custom">Content</Stack>);
    expect(container.firstElementChild!.className).toContain('custom');
  });
});
