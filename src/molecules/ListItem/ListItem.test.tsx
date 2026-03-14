import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ListItem } from './ListItem';

describe('ListItem', () => {
  it('renders primary text', () => {
    render(<ListItem primary="John Doe" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders secondary text when provided', () => {
    render(<ListItem primary="John Doe" secondary="john@example.com" />);
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('renders leading content', () => {
    render(<ListItem primary="John Doe" leading={<span data-testid="avatar">JD</span>} />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('renders trailing content', () => {
    render(<ListItem primary="John Doe" trailing={<span data-testid="action">→</span>} />);
    expect(screen.getByTestId('action')).toBeInTheDocument();
  });

  it('is not interactive by default', () => {
    render(<ListItem primary="John Doe" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('has button role when interactive', () => {
    render(<ListItem primary="John Doe" interactive />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when interactive and clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<ListItem primary="John Doe" interactive onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('supports keyboard activation when interactive', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<ListItem primary="John Doe" interactive onClick={handleClick} />);
    screen.getByRole('button').focus();
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies selected styling', () => {
    const { container } = render(<ListItem primary="John Doe" selected />);
    expect(container.firstElementChild!.className).toContain('--laurel-bg-brand-muted');
  });

  it('merges custom className', () => {
    const { container } = render(<ListItem primary="John Doe" className="my-custom" />);
    expect(container.firstElementChild!.className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<ListItem ref={ref} primary="John Doe" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
