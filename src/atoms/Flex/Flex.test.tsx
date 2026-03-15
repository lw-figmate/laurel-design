import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex><span>Child</span></Flex>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('defaults to row direction', () => {
    const { container } = render(<Flex>Content</Flex>);
    expect(container.firstElementChild!.className).toContain('flex-row');
  });

  it('applies column direction', () => {
    const { container } = render(<Flex direction="column">Content</Flex>);
    expect(container.firstElementChild!.className).toContain('flex-col');
  });

  it('applies alignment and justify', () => {
    const { container } = render(<Flex align="center" justify="between">Content</Flex>);
    const cls = container.firstElementChild!.className;
    expect(cls).toContain('items-center');
    expect(cls).toContain('justify-between');
  });

  it('applies gap', () => {
    const { container } = render(<Flex gap="4">Content</Flex>);
    expect(container.firstElementChild!.className).toContain('--laurel-space-4');
  });

  it('applies wrap', () => {
    const { container } = render(<Flex wrap>Content</Flex>);
    expect(container.firstElementChild!.className).toContain('flex-wrap');
  });

  it('applies flex shorthand', () => {
    const { container } = render(<Flex flex="1">Content</Flex>);
    expect(container.firstElementChild!.className).toContain('flex-1');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Flex ref={ref}>Content</Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    const { container } = render(<Flex className="custom">Content</Flex>);
    expect(container.firstElementChild!.className).toContain('custom');
  });
});
