import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Combobox } from './Combobox';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

describe('Combobox', () => {
  it('renders an input with combobox role', () => {
    render(<Combobox options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows options when focused', async () => {
    const user = userEvent.setup();
    render(<Combobox options={options} />);
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });

  it('filters options as user types', async () => {
    const user = userEvent.setup();
    render(<Combobox options={options} />);
    await user.click(screen.getByRole('combobox'));
    await user.type(screen.getByRole('combobox'), 'ban');
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });

  it('calls onValueChange when option is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Combobox options={options} onValueChange={handleChange} />);
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByText('Banana'));
    expect(handleChange).toHaveBeenCalledWith('banana');
  });

  it('shows empty message when no options match', async () => {
    const user = userEvent.setup();
    render(<Combobox options={options} emptyMessage="Nothing found" />);
    await user.click(screen.getByRole('combobox'));
    await user.type(screen.getByRole('combobox'), 'xyz');
    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    render(<Combobox options={options} />);
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation with ArrowDown and Enter', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Combobox options={options} onValueChange={handleChange} />);
    await user.click(screen.getByRole('combobox'));
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(handleChange).toHaveBeenCalledWith('banana');
  });

  it('renders placeholder', () => {
    render(<Combobox options={options} placeholder="Search fruits..." />);
    expect(screen.getByPlaceholderText('Search fruits...')).toBeInTheDocument();
  });

  it('supports disabled state', () => {
    render(<Combobox options={options} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<Combobox ref={ref} options={options} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
