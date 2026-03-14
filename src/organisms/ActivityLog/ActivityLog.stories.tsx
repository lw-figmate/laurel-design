import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActivityLog } from './ActivityLog';

const meta = {
  title: 'Organisms/ActivityLog',
  component: ActivityLog,
  tags: ['autodocs'],
} satisfies Meta<typeof ActivityLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Recent Activity',
    events: [
      { id: '1', title: 'Deployed v1.2.0', timestamp: '2 hours ago', variant: 'success' },
      { id: '2', title: 'Fixed login bug', description: 'Resolved redirect issue on mobile', timestamp: '4 hours ago', variant: 'primary' },
      { id: '3', title: 'New team member', description: 'Alice joined the team', timestamp: '6 hours ago' },
      { id: '4', title: 'Database migration', timestamp: '1 day ago', variant: 'warning' },
      { id: '5', title: 'Service outage', description: 'Resolved in 5 minutes', timestamp: '2 days ago', variant: 'error' },
    ],
  },
};

export const WithPagination: Story = {
  args: {
    ...Default.args,
    totalPages: 5,
    currentPage: 1,
    onPageChange: (page) => alert(`Go to page ${page}`),
  },
};

export const Empty: Story = {
  args: {
    events: [],
    emptyMessage: 'No activity to display.',
  },
};
