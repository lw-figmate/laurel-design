import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  it('does not render when closed', () => {
    render(<Drawer open={false} onClose={() => {}}>Content</Drawer>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<Drawer open onClose={() => {}}>Content</Drawer>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Drawer open onClose={() => {}}>Drawer content</Drawer>);
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Drawer open onClose={() => {}} title="Settings">Body</Drawer>);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('has aria-modal and aria-label', () => {
    render(<Drawer open onClose={() => {}} title="Settings">Body</Drawer>);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Settings');
  });

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Drawer open onClose={handleClose}>Body</Drawer>);
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Drawer open onClose={handleClose}>Body</Drawer>);
    const overlay = screen.getByRole('dialog').parentElement!.querySelector('[aria-hidden="true"]')!;
    await user.click(overlay);
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders close button when title is provided', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Drawer open onClose={handleClose} title="Title">Body</Drawer>);
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(handleClose).toHaveBeenCalled();
  });
});
