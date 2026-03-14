import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { KanbanBoard } from './KanbanBoard';
import type { KanbanColumn } from './KanbanBoard.types';

const columns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    items: [
      { id: '1', title: 'Task 1', description: 'First task' },
      { id: '2', title: 'Task 2', label: 'Bug' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    items: [{ id: '3', title: 'Task 3' }],
  },
  {
    id: 'done',
    title: 'Done',
    items: [],
  },
];

describe('KanbanBoard', () => {
  it('renders all columns', () => {
    render(<KanbanBoard columns={columns} />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('renders items within columns', () => {
    render(<KanbanBoard columns={columns} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('renders item descriptions', () => {
    render(<KanbanBoard columns={columns} />);
    expect(screen.getByText('First task')).toBeInTheDocument();
  });

  it('renders item labels as badges', () => {
    render(<KanbanBoard columns={columns} />);
    expect(screen.getByText('Bug')).toBeInTheDocument();
  });

  it('shows item count badge per column', () => {
    render(<KanbanBoard columns={columns} />);
    expect(screen.getByText('2')).toBeInTheDocument(); // To Do has 2 items
    expect(screen.getByText('1')).toBeInTheDocument(); // In Progress has 1
    expect(screen.getByText('0')).toBeInTheDocument(); // Done has 0
  });

  it('calls onAddItem when add button is clicked', () => {
    const onAddItem = vi.fn();
    render(<KanbanBoard columns={columns} onAddItem={onAddItem} />);
    const addButtons = screen.getAllByRole('button', { name: /Add to/ });
    fireEvent.click(addButtons[0]);
    expect(onAddItem).toHaveBeenCalledWith('todo');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<KanbanBoard ref={ref} columns={columns} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
