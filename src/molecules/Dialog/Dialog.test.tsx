import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('does not render when closed', () => {
    render(<Dialog open={false} onClose={() => {}}>Content</Dialog>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<Dialog open onClose={() => {}}>Content</Dialog>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Dialog open onClose={() => {}}>Hello dialog</Dialog>);
    expect(screen.getByText('Hello dialog')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Dialog open onClose={() => {}} title="Confirm">Body</Dialog>);
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('has aria-modal and aria-label', () => {
    render(<Dialog open onClose={() => {}} title="Confirm">Body</Dialog>);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Confirm');
  });

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Dialog open onClose={handleClose}>Body</Dialog>);
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Dialog open onClose={handleClose}>Body</Dialog>);
    const overlay = screen.getByRole('dialog').parentElement!.querySelector('[aria-hidden="true"]')!;
    await user.click(overlay);
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders close button when title is provided', () => {
    render(<Dialog open onClose={() => {}} title="Title">Body</Dialog>);
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Dialog open onClose={handleClose} title="Title">Body</Dialog>);
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(handleClose).toHaveBeenCalled();
  });
});
