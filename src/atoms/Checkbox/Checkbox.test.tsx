import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders a checkbox input', () => {
    render(<Checkbox aria-label="test" />);
    expect(screen.getByRole('checkbox', { name: 'test' })).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="test" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox aria-label="test" onChange={handleChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox aria-label="test" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('supports controlled checked state', () => {
    render(<Checkbox aria-label="test" checked onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('sets indeterminate property', () => {
    render(<Checkbox aria-label="test" indeterminate />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);
  });

  it('applies md size by default', () => {
    render(<Checkbox aria-label="test" />);
    expect(screen.getByRole('checkbox').className).toContain('h-4');
  });

  it('applies sm size classes', () => {
    render(<Checkbox aria-label="test" checkboxSize="sm" />);
    expect(screen.getByRole('checkbox').className).toContain('h-3.5');
  });

  it('applies lg size classes', () => {
    render(<Checkbox aria-label="test" checkboxSize="lg" />);
    expect(screen.getByRole('checkbox').className).toContain('h-5');
  });

  it('merges custom className', () => {
    render(<Checkbox aria-label="test" className="my-custom" />);
    expect(screen.getByRole('checkbox').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<Checkbox ref={ref} aria-label="test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
