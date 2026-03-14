import type { Meta, StoryObj } from '@storybook/react-vite';
import { KanbanBoard } from './KanbanBoard';

const meta = {
  title: 'Organisms/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        items: [
          { id: '1', title: 'Design homepage', description: 'Create wireframes', label: 'Design' },
          { id: '2', title: 'Setup CI/CD', label: 'DevOps' },
        ],
      },
      {
        id: 'in-progress',
        title: 'In Progress',
        items: [
          { id: '3', title: 'Build auth flow', description: 'Login + registration' },
        ],
      },
      {
        id: 'review',
        title: 'Review',
        items: [
          { id: '4', title: 'API docs', label: 'Docs' },
        ],
      },
      {
        id: 'done',
        title: 'Done',
        items: [
          { id: '5', title: 'Project setup' },
          { id: '6', title: 'Database schema' },
        ],
      },
    ],
    onAddItem: (columnId) => alert(`Add to ${columnId}`),
  },
};

export const Empty: Story = {
  args: {
    columns: [
      { id: 'todo', title: 'To Do', items: [] },
      { id: 'in-progress', title: 'In Progress', items: [] },
      { id: 'done', title: 'Done', items: [] },
    ],
  },
};
