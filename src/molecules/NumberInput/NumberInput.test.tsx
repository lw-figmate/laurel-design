import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { NumberInput } from './NumberInput';

describe('NumberInput', () => {
  it('renders with default value', () => {
    render(<NumberInput defaultValue={5} label="Count" />);
    expect(screen.getByRole('spinbutton')).toHaveValue('5');
  });

  it('increments on plus click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NumberInput defaultValue={5} onValueChange={onChange} label="Count" />);
    await user.click(screen.getByLabelText('Increment'));
    expect(onChange).toHaveBeenCalledWith(6);
  });

  it('decrements on minus click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NumberInput defaultValue={5} onValueChange={onChange} label="Count" />);
    await user.click(screen.getByLabelText('Decrement'));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('respects min boundary', async () => {
    const user = userEvent.setup();
    render(<NumberInput defaultValue={0} min={0} label="Count" />);
    const decBtn = screen.getByLabelText('Decrement');
    expect(decBtn).toBeDisabled();
    await user.click(decBtn);
    expect(screen.getByRole('spinbutton')).toHaveValue('0');
  });

  it('respects max boundary', async () => {
    const user = userEvent.setup();
    render(<NumberInput defaultValue={10} max={10} label="Count" />);
    const incBtn = screen.getByLabelText('Increment');
    expect(incBtn).toBeDisabled();
    await user.click(incBtn);
    expect(screen.getByRole('spinbutton')).toHaveValue('10');
  });

  it('supports custom step', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NumberInput defaultValue={0} step={5} onValueChange={onChange} label="Count" />);
    await user.click(screen.getByLabelText('Increment'));
    expect(onChange).toHaveBeenCalledWith(5);
  });

  it('disables all controls when disabled', () => {
    render(<NumberInput disabled label="Count" />);
    expect(screen.getByRole('spinbutton')).toBeDisabled();
    expect(screen.getByLabelText('Increment')).toBeDisabled();
    expect(screen.getByLabelText('Decrement')).toBeDisabled();
  });
});
