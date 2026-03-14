import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders a switch element', () => {
    render(<Switch aria-label="test" />);
    expect(screen.getByRole('switch', { name: 'test' })).toBeInTheDocument();
  });

  it('defaults to off', () => {
    render(<Switch aria-label="test" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('toggles when clicked (uncontrolled)', async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="test" />);
    const sw = screen.getByRole('switch');
    expect(sw).toHaveAttribute('aria-checked', 'false');
    await user.click(sw);
    expect(sw).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch aria-label="test" onCheckedChange={handleChange} />);
    await user.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('supports controlled checked state', () => {
    render(<Switch aria-label="test" checked />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch aria-label="test" disabled onCheckedChange={handleChange} />);
    await user.click(screen.getByRole('switch'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Switch aria-label="test" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('supports defaultChecked', () => {
    render(<Switch aria-label="test" defaultChecked />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('applies md track size by default', () => {
    render(<Switch aria-label="test" />);
    expect(screen.getByRole('switch').className).toContain('h-5');
  });

  it('applies sm size classes', () => {
    render(<Switch aria-label="test" switchSize="sm" />);
    expect(screen.getByRole('switch').className).toContain('h-4');
  });

  it('applies lg size classes', () => {
    render(<Switch aria-label="test" switchSize="lg" />);
    expect(screen.getByRole('switch').className).toContain('h-6');
  });

  it('merges custom className', () => {
    render(<Switch aria-label="test" className="my-custom" />);
    expect(screen.getByRole('switch').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLButtonElement | null>;
    render(<Switch ref={ref} aria-label="test" />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
