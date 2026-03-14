import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders with role status', () => {
    render(<Toast message="Saved" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders the message', () => {
    render(<Toast message="Changes saved" />);
    expect(screen.getByText('Changes saved')).toBeInTheDocument();
  });

  it('has aria-live polite', () => {
    render(<Toast message="Saved" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
  });

  it('applies info variant by default', () => {
    render(<Toast message="Info" />);
    const icon = screen.getByRole('status').querySelector('svg')!;
    expect(icon.getAttribute('class')).toContain('--laurel-icon-brand');
  });

  it('applies success variant', () => {
    render(<Toast variant="success" message="Done" />);
    const icon = screen.getByRole('status').querySelector('svg')!;
    expect(icon.getAttribute('class')).toContain('--laurel-icon-success');
  });

  it('applies warning variant', () => {
    render(<Toast variant="warning" message="Watch out" />);
    const icon = screen.getByRole('status').querySelector('svg')!;
    expect(icon.getAttribute('class')).toContain('--laurel-status-warning');
  });

  it('applies error variant', () => {
    render(<Toast variant="error" message="Failed" />);
    const icon = screen.getByRole('status').querySelector('svg')!;
    expect(icon.getAttribute('class')).toContain('--laurel-icon-error');
  });

  it('renders action button when provided', () => {
    render(<Toast message="Deleted" action={{ label: 'Undo', onClick: () => {} }} />);
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument();
  });

  it('calls action onClick when action is clicked', async () => {
    const user = userEvent.setup();
    const handleAction = vi.fn();
    render(<Toast message="Deleted" action={{ label: 'Undo', onClick: handleAction }} />);
    await user.click(screen.getByRole('button', { name: 'Undo' }));
    expect(handleAction).toHaveBeenCalled();
  });

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Toast message="Info" onDismiss={() => {}} />);
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss is clicked', async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();
    render(<Toast message="Info" onDismiss={handleDismiss} />);
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(handleDismiss).toHaveBeenCalled();
  });

  it('merges custom className', () => {
    render(<Toast message="Info" className="my-custom" />);
    expect(screen.getByRole('status').className).toContain('my-custom');
  });
});
