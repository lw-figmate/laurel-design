import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
  it('renders a select element', () => {
    render(
      <Select aria-label="test">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox', { name: 'test' })).toBeInTheDocument();
  });

  it('renders options', () => {
    render(
      <Select aria-label="test">
        <option value="a">Alpha</option>
        <option value="b">Beta</option>
      </Select>,
    );
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('renders placeholder as disabled option', () => {
    render(
      <Select aria-label="test" placeholder="Choose…">
        <option value="a">Alpha</option>
      </Select>,
    );
    const placeholder = screen.getByText('Choose…');
    expect(placeholder.tagName).toBe('OPTION');
    expect(placeholder).toBeDisabled();
  });

  it('calls onChange when selection changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Select aria-label="test" onChange={handleChange}>
        <option value="a">Alpha</option>
        <option value="b">Beta</option>
      </Select>,
    );
    await user.selectOptions(screen.getByRole('combobox'), 'b');
    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Select aria-label="test" disabled>
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('applies error styling and aria-invalid', () => {
    render(
      <Select aria-label="test" error>
        <option value="a">Alpha</option>
      </Select>,
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select.className).toContain('--laurel-border-error');
  });

  it('does not set aria-invalid when not in error', () => {
    render(
      <Select aria-label="test">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid');
  });

  it('applies md size by default', () => {
    render(
      <Select aria-label="test">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox').className).toContain('--laurel-space-3');
  });

  it('applies sm size classes', () => {
    render(
      <Select aria-label="test" selectSize="sm">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox').className).toContain('--laurel-font-size-sm');
  });

  it('applies lg size classes', () => {
    render(
      <Select aria-label="test" selectSize="lg">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox').className).toContain('--laurel-space-4');
  });

  it('merges custom className', () => {
    render(
      <Select aria-label="test" className="my-custom">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(screen.getByRole('combobox').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLSelectElement | null>;
    render(
      <Select ref={ref} aria-label="test">
        <option value="a">Alpha</option>
      </Select>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
