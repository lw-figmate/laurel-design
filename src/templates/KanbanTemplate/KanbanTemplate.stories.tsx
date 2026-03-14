import type { Meta, StoryObj } from '@storybook/react-vite';
import { KanbanTemplate } from './KanbanTemplate';

const meta = {
  title: 'Templates/KanbanTemplate',
  component: KanbanTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof KanbanTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Project Board',
    breadcrumbs: [{ label: 'Home', href: '#' }, { label: 'Projects' }],
    columns: [
      { id: 'backlog', title: 'Backlog', items: [{ id: '1', title: 'Research competitors' }, { id: '2', title: 'Design mockups' }] },
      { id: 'in-progress', title: 'In Progress', items: [{ id: '3', title: 'Build components' }] },
      { id: 'review', title: 'Review', items: [] },
      { id: 'done', title: 'Done', items: [{ id: '4', title: 'Project setup' }] },
    ],
  },
};
