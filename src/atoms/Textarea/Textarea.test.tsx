import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders a textarea element', () => {
    render(<Textarea aria-label="test" />);
    expect(screen.getByRole('textbox', { name: 'test' })).toBeInTheDocument();
  });

  it('displays placeholder text', () => {
    render(<Textarea placeholder="Write here…" />);
    expect(screen.getByPlaceholderText('Write here…')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="test" />);
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Hello');
    expect(textarea).toHaveValue('Hello');
  });

  it('calls onChange when typed into', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Textarea aria-label="test" onChange={handleChange} />);
    await user.type(screen.getByRole('textbox'), 'A');
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies md size by default', () => {
    render(<Textarea aria-label="test" />);
    expect(screen.getByRole('textbox').className).toContain('--laurel-space-3');
  });

  it('applies sm size classes', () => {
    render(<Textarea aria-label="test" textareaSize="sm" />);
    expect(screen.getByRole('textbox').className).toContain('--laurel-font-size-sm');
  });

  it('applies lg size classes', () => {
    render(<Textarea aria-label="test" textareaSize="lg" />);
    expect(screen.getByRole('textbox').className).toContain('--laurel-space-4');
  });

  it('applies error styling and aria-invalid', () => {
    render(<Textarea aria-label="test" error />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea.className).toContain('--laurel-border-error');
  });

  it('does not set aria-invalid when not in error', () => {
    render(<Textarea aria-label="test" />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Textarea aria-label="test" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies vertical resize by default', () => {
    render(<Textarea aria-label="test" />);
    expect(screen.getByRole('textbox').className).toContain('resize-y');
  });

  it('applies resize-none when resize is none', () => {
    render(<Textarea aria-label="test" resize="none" />);
    expect(screen.getByRole('textbox').className).toContain('resize-none');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLTextAreaElement | null>;
    render(<Textarea ref={ref} aria-label="test" />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('merges custom className', () => {
    render(<Textarea aria-label="test" className="my-custom" />);
    expect(screen.getByRole('textbox').className).toContain('my-custom');
  });
});
