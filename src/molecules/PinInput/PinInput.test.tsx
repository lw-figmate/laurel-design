import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { PinInput } from './PinInput';

describe('PinInput', () => {
  it('renders correct number of inputs', () => {
    render(<PinInput length={6} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(6);
  });

  it('defaults to 4 inputs', () => {
    render(<PinInput />);
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
  });

  it('calls onValueChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<PinInput onValueChange={onChange} />);
    const inputs = screen.getAllByRole('textbox');
    await user.click(inputs[0]);
    await user.keyboard('1');
    expect(onChange).toHaveBeenCalled();
  });

  it('calls onComplete when all fields filled', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    render(<PinInput length={4} onComplete={onComplete} />);
    const inputs = screen.getAllByRole('textbox');
    await user.click(inputs[0]);
    await user.keyboard('1234');
    expect(onComplete).toHaveBeenCalledWith('1234');
  });

  it('masks input when mask is true', () => {
    render(<PinInput mask />);
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => expect(input.type).toBe('password'));
  });

  it('disables all inputs when disabled', () => {
    render(<PinInput disabled />);
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input) => expect(input).toBeDisabled());
  });

  it('has accessible labels for each digit', () => {
    render(<PinInput length={3} />);
    expect(screen.getByLabelText('Pin digit 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Pin digit 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Pin digit 3')).toBeInTheDocument();
  });
});
