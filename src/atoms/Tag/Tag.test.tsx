import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders a span element', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('applies default variant styling', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React').className).toContain('--laurel-bg-subtle');
  });

  it('applies primary variant styling', () => {
    render(<Tag variant="primary">React</Tag>);
    expect(screen.getByText('React').closest('span')!.className).toContain('--laurel-bg-brand-subtle');
  });

  it('applies success variant styling', () => {
    render(<Tag variant="success">Active</Tag>);
    expect(screen.getByText('Active').closest('span')!.className).toContain('--laurel-text-success');
  });

  it('applies md size by default', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React').className).toContain('--laurel-font-size-sm');
  });

  it('applies sm size classes', () => {
    render(<Tag size="sm">React</Tag>);
    expect(screen.getByText('React').closest('span')!.className).toContain('--laurel-font-size-xs');
  });

  it('applies lg size classes', () => {
    render(<Tag size="lg">React</Tag>);
    expect(screen.getByText('React').closest('span')!.className).toContain('--laurel-space-3');
  });

  it('does not render dismiss button by default', () => {
    render(<Tag>React</Tag>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Tag onDismiss={() => {}}>React</Tag>);
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();
    render(<Tag onDismiss={handleDismiss}>React</Tag>);
    await user.click(screen.getByRole('button'));
    expect(handleDismiss).toHaveBeenCalled();
  });

  it('uses custom dismissLabel', () => {
    render(<Tag onDismiss={() => {}} dismissLabel="Delete tag">React</Tag>);
    expect(screen.getByRole('button', { name: 'Delete tag' })).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<Tag className="my-custom">React</Tag>);
    expect(screen.getByText('React').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
    render(<Tag ref={ref}>React</Tag>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
