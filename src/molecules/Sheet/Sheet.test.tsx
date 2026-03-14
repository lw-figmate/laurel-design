import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Sheet } from './Sheet';

describe('Sheet', () => {
  it('does not render when closed', () => {
    render(<Sheet open={false} onClose={vi.fn()}>Content</Sheet>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<Sheet open onClose={vi.fn()}>Sheet content</Sheet>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Sheet content')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Sheet open onClose={vi.fn()} title="My Sheet">Content</Sheet>);
    expect(screen.getByText('My Sheet')).toBeInTheDocument();
  });

  it('calls onClose on overlay click', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Sheet open onClose={onClose}>Content</Sheet>);
    const overlay = document.querySelector('[aria-hidden="true"]')!;
    await user.click(overlay);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Sheet open onClose={onClose}>Content</Sheet>);
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledOnce();
  });
});
