import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders with role alert', () => {
    render(<Alert>Something happened</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Alert>Something happened</Alert>);
    expect(screen.getByText('Something happened')).toBeInTheDocument();
  });

  it('renders a title when provided', () => {
    render(<Alert title="Heads up">Details here</Alert>);
    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('Details here')).toBeInTheDocument();
  });

  it('applies info variant by default', () => {
    render(<Alert>Info</Alert>);
    expect(screen.getByRole('alert').className).toContain('--laurel-status-info');
  });

  it('applies success variant', () => {
    render(<Alert variant="success">Success</Alert>);
    expect(screen.getByRole('alert').className).toContain('--laurel-status-success');
  });

  it('applies warning variant', () => {
    render(<Alert variant="warning">Warning</Alert>);
    expect(screen.getByRole('alert').className).toContain('--laurel-status-warning');
  });

  it('applies error variant', () => {
    render(<Alert variant="error">Error</Alert>);
    expect(screen.getByRole('alert').className).toContain('--laurel-status-error');
  });

  it('does not render dismiss button by default', () => {
    render(<Alert>Info</Alert>);
    expect(screen.queryByRole('button', { name: 'Dismiss' })).not.toBeInTheDocument();
  });

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Alert onDismiss={() => {}}>Info</Alert>);
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss is clicked', async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();
    render(<Alert onDismiss={handleDismiss}>Info</Alert>);
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(handleDismiss).toHaveBeenCalled();
  });

  it('merges custom className', () => {
    render(<Alert className="my-custom">Info</Alert>);
    expect(screen.getByRole('alert').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Alert ref={ref}>Info</Alert>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
