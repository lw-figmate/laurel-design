import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CommandBar } from './CommandBar';
import type { CommandItem } from '../../molecules/CommandPalette/CommandPalette.types';

const commands: CommandItem[] = [
  { id: '1', label: 'New File', group: 'Actions' },
  { id: '2', label: 'Search', group: 'Actions' },
];

describe('CommandBar', () => {
  it('renders without crashing', () => {
    const { container } = render(<CommandBar commands={commands} onSelect={vi.fn()} />);
    expect(container).toBeInTheDocument();
  });

  it('opens command palette on Cmd+K', () => {
    render(<CommandBar commands={commands} onSelect={vi.fn()} />);
    fireEvent.keyDown(document, { key: 'k', metaKey: true });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('opens command palette on Ctrl+K', () => {
    render(<CommandBar commands={commands} onSelect={vi.fn()} />);
    fireEvent.keyDown(document, { key: 'k', ctrlKey: true });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('calls onSelect when a command is chosen', () => {
    const onSelect = vi.fn();
    render(<CommandBar commands={commands} onSelect={onSelect} />);
    fireEvent.keyDown(document, { key: 'k', metaKey: true });
    fireEvent.click(screen.getByText('New File'));
    expect(onSelect).toHaveBeenCalledWith(commands[0]);
  });

  it('supports custom shortcut key', () => {
    render(<CommandBar commands={commands} onSelect={vi.fn()} shortcutKey="p" />);
    fireEvent.keyDown(document, { key: 'p', metaKey: true });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<CommandBar ref={ref} commands={commands} onSelect={vi.fn()} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
