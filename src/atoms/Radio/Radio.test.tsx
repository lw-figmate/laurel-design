import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders a radio input', () => {
    render(<Radio aria-label="test" />);
    expect(screen.getByRole('radio', { name: 'test' })).toBeInTheDocument();
  });

  it('selects when clicked', async () => {
    const user = userEvent.setup();
    render(<Radio aria-label="test" />);
    const radio = screen.getByRole('radio');
    expect(radio).not.toBeChecked();
    await user.click(radio);
    expect(radio).toBeChecked();
  });

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Radio aria-label="test" onChange={handleChange} />);
    await user.click(screen.getByRole('radio'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Radio aria-label="test" disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('supports controlled checked state', () => {
    render(<Radio aria-label="test" checked onChange={() => {}} />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('applies md size by default', () => {
    render(<Radio aria-label="test" />);
    expect(screen.getByRole('radio').className).toContain('h-4');
  });

  it('applies sm size classes', () => {
    render(<Radio aria-label="test" radioSize="sm" />);
    expect(screen.getByRole('radio').className).toContain('h-3.5');
  });

  it('applies lg size classes', () => {
    render(<Radio aria-label="test" radioSize="lg" />);
    expect(screen.getByRole('radio').className).toContain('h-5');
  });

  it('merges custom className', () => {
    render(<Radio aria-label="test" className="my-custom" />);
    expect(screen.getByRole('radio').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<Radio ref={ref} aria-label="test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('supports name and value props', () => {
    render(<Radio aria-label="test" name="color" value="red" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('name', 'color');
    expect(radio).toHaveAttribute('value', 'red');
  });
});
