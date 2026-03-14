import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { CommandPalette } from './CommandPalette';
import type { CommandItem } from './CommandPalette.types';

const commands: CommandItem[] = [
  { id: '1', label: 'Open File', shortcut: '⌘O', group: 'File' },
  { id: '2', label: 'Save File', shortcut: '⌘S', group: 'File' },
  { id: '3', label: 'Toggle Theme', group: 'View' },
  { id: '4', label: 'Search', description: 'Full-text search' },
];

describe('CommandPalette', () => {
  it('does not render when closed', () => {
    render(<CommandPalette open={false} onClose={vi.fn()} commands={commands} onSelect={vi.fn()} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={vi.fn()} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('shows all commands initially', () => {
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={vi.fn()} />);
    expect(screen.getByText('Open File')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('filters commands by search query', async () => {
    const user = userEvent.setup();
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={vi.fn()} />);
    const input = screen.getByPlaceholderText('Search commands...');
    await user.type(input, 'save');
    expect(screen.getByText('Save File')).toBeInTheDocument();
    expect(screen.queryByText('Open File')).not.toBeInTheDocument();
  });

  it('calls onSelect when command is clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={onSelect} />);
    await user.click(screen.getByText('Toggle Theme'));
    expect(onSelect).toHaveBeenCalledWith(commands[2]);
  });

  it('shows shortcut labels', () => {
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={vi.fn()} />);
    expect(screen.getByText('⌘O')).toBeInTheDocument();
  });

  it('shows empty state when no results', async () => {
    const user = userEvent.setup();
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={vi.fn()} />);
    await user.type(screen.getByPlaceholderText('Search commands...'), 'zzzzz');
    expect(screen.getByText('No results found.')).toBeInTheDocument();
  });

  it('supports keyboard navigation with Enter', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<CommandPalette open onClose={vi.fn()} commands={commands} onSelect={onSelect} />);
    const input = screen.getByPlaceholderText('Search commands...');
    await user.type(input, '{ArrowDown}{Enter}');
    expect(onSelect).toHaveBeenCalled();
  });
});
