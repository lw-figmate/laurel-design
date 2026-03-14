import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="test" />);
    expect(screen.getByRole('textbox', { name: 'test' })).toBeInTheDocument();
  });

  it('displays placeholder text', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input aria-label="test" />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'Hello');
    expect(input).toHaveValue('Hello');
  });

  it('calls onChange when typed into', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input aria-label="test" onChange={handleChange} />);
    await user.type(screen.getByRole('textbox'), 'A');
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies md size by default', () => {
    render(<Input aria-label="test" />);
    expect(screen.getByRole('textbox').className).toContain('--laurel-space-3');
  });

  it('applies sm size classes', () => {
    render(<Input aria-label="test" inputSize="sm" />);
    expect(screen.getByRole('textbox').className).toContain('--laurel-font-size-sm');
  });

  it('applies lg size classes', () => {
    render(<Input aria-label="test" inputSize="lg" />);
    expect(screen.getByRole('textbox').className).toContain('--laurel-space-4');
  });

  it('applies error styling and aria-invalid', () => {
    render(<Input aria-label="test" error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.className).toContain('--laurel-border-error');
  });

  it('does not set aria-invalid when not in error', () => {
    render(<Input aria-label="test" />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input aria-label="test" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<Input ref={ref} aria-label="test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('merges custom className', () => {
    render(<Input aria-label="test" className="my-custom" />);
    expect(screen.getByRole('textbox').className).toContain('my-custom');
  });
});
