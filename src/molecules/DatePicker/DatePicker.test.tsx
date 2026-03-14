import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders trigger button with placeholder', () => {
    render(<DatePicker placeholder="Pick a date" />);
    expect(screen.getByText('Pick a date')).toBeInTheDocument();
  });

  it('shows formatted date when value is provided', () => {
    render(<DatePicker value={new Date(2024, 0, 15)} />);
    expect(screen.getByText('2024-01-15')).toBeInTheDocument();
  });

  it('opens calendar on click', async () => {
    const user = userEvent.setup();
    render(<DatePicker />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('calls onValueChange when a day is selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DatePicker value={new Date(2024, 0, 1)} onValueChange={onChange} />);
    await user.click(screen.getByRole('button'));
    await user.click(screen.getByText('15'));
    expect(onChange).toHaveBeenCalled();
    const date = onChange.mock.calls[0][0] as Date;
    expect(date.getDate()).toBe(15);
  });

  it('navigates to next month', async () => {
    const user = userEvent.setup();
    render(<DatePicker value={new Date(2024, 0, 1)} />);
    await user.click(screen.getByRole('button'));
    await user.click(screen.getByLabelText('Next month'));
    expect(screen.getByText(/February/)).toBeInTheDocument();
  });

  it('navigates to previous month', async () => {
    const user = userEvent.setup();
    render(<DatePicker value={new Date(2024, 1, 1)} />);
    await user.click(screen.getByRole('button'));
    await user.click(screen.getByLabelText('Previous month'));
    expect(screen.getByText(/January/)).toBeInTheDocument();
  });

  it('disables trigger when disabled', () => {
    render(<DatePicker disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
