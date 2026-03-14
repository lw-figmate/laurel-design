import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { KanbanTemplate } from './KanbanTemplate';

describe('KanbanTemplate', () => {
  const defaultColumns = [
    { id: 'todo', title: 'To Do', items: [{ id: '1', title: 'Task 1' }] },
    { id: 'done', title: 'Done', items: [] },
  ];

  it('renders title', () => {
    render(<KanbanTemplate title="Project Board" columns={defaultColumns} />);
    expect(screen.getByText('Project Board')).toBeInTheDocument();
  });

  it('renders kanban columns', () => {
    render(<KanbanTemplate title="Board" columns={defaultColumns} />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('renders kanban items', () => {
    render(<KanbanTemplate title="Board" columns={defaultColumns} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
  });

  it('renders toolbar', () => {
    render(
      <KanbanTemplate title="Board" columns={defaultColumns} toolbar={<button>Filter</button>} />,
    );
    expect(screen.getByRole('button', { name: 'Filter' })).toBeInTheDocument();
  });

  it('renders primary action', () => {
    render(
      <KanbanTemplate title="Board" columns={defaultColumns} primaryAction={<button>New task</button>} />,
    );
    expect(screen.getByRole('button', { name: 'New task' })).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<KanbanTemplate ref={ref} title="Board" columns={defaultColumns} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
