import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { SearchField } from './SearchField';

describe('SearchField', () => {
  it('renders a search input', () => {
    render(<SearchField placeholder="Search…" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('displays placeholder text', () => {
    render(<SearchField placeholder="Find something" />);
    expect(screen.getByPlaceholderText('Find something')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<SearchField placeholder="Search…" />);
    const input = screen.getByRole('searchbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });

  it('calls onSearch when Enter is pressed', async () => {
    const user = userEvent.setup();
    const handleSearch = vi.fn();
    render(<SearchField placeholder="Search…" onSearch={handleSearch} />);
    const input = screen.getByRole('searchbox');
    await user.type(input, 'test{Enter}');
    expect(handleSearch).toHaveBeenCalledWith('test');
  });

  it('does not call onSearch on regular typing', async () => {
    const user = userEvent.setup();
    const handleSearch = vi.fn();
    render(<SearchField placeholder="Search…" onSearch={handleSearch} />);
    await user.type(screen.getByRole('searchbox'), 'abc');
    expect(handleSearch).not.toHaveBeenCalled();
  });

  it('shows clear button when onClear is provided', () => {
    render(<SearchField onClear={vi.fn()} />);
    expect(screen.getByLabelText('Clear search')).toBeInTheDocument();
  });

  it('does not show clear button when onClear is not provided', () => {
    render(<SearchField />);
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
  });

  it('calls onClear when clear button is clicked', async () => {
    const user = userEvent.setup();
    const handleClear = vi.fn();
    render(<SearchField onClear={handleClear} />);
    await user.click(screen.getByLabelText('Clear search'));
    expect(handleClear).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is true', () => {
    render(<SearchField disabled />);
    expect(screen.getByRole('searchbox')).toBeDisabled();
  });
});
