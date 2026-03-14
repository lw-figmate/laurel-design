import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ConfirmDialog } from './ConfirmDialog';

describe('ConfirmDialog', () => {
  it('does not render when closed', () => {
    render(<ConfirmDialog open={false} onClose={() => {}} onConfirm={() => {}} title="Delete">Are you sure?</ConfirmDialog>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<ConfirmDialog open onClose={() => {}} onConfirm={() => {}} title="Delete">Are you sure?</ConfirmDialog>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });

  it('renders confirm and cancel buttons', () => {
    render(<ConfirmDialog open onClose={() => {}} onConfirm={() => {}} title="Test">Body</ConfirmDialog>);
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls onConfirm when confirm is clicked', async () => {
    const user = userEvent.setup();
    const handleConfirm = vi.fn();
    render(<ConfirmDialog open onClose={() => {}} onConfirm={handleConfirm} title="Test">Body</ConfirmDialog>);
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(handleConfirm).toHaveBeenCalledOnce();
  });

  it('calls onClose when cancel is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<ConfirmDialog open onClose={handleClose} onConfirm={() => {}} title="Test">Body</ConfirmDialog>);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(handleClose).toHaveBeenCalledOnce();
  });

  it('renders custom labels', () => {
    render(
      <ConfirmDialog open onClose={() => {}} onConfirm={() => {}} title="Test" confirmLabel="Yes, delete" cancelLabel="No, keep">
        Body
      </ConfirmDialog>,
    );
    expect(screen.getByRole('button', { name: 'Yes, delete' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'No, keep' })).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(
      <ConfirmDialog open onClose={() => {}} onConfirm={() => {}} title="Test" loading>Body</ConfirmDialog>,
    );
    expect(screen.getByRole('button', { name: 'Loading…' })).toBeDisabled();
  });
});
