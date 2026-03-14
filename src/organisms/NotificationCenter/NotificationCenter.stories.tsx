import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationCenter } from './NotificationCenter';
import type { NotificationItem } from './NotificationCenter.types';

const notifications: NotificationItem[] = [
  { id: '1', title: 'New comment on your post', description: 'Alice replied to your thread', timestamp: '5m ago', unread: true },
  { id: '2', title: 'System update', description: 'Version 2.0 is now available', timestamp: '1h ago', unread: true },
  { id: '3', title: 'Welcome!', description: 'Thanks for joining the platform', timestamp: '2d ago', unread: false },
];

const meta = {
  title: 'Organisms/NotificationCenter',
  component: NotificationCenter,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notifications,
    onNotificationClick: (id) => alert(`Clicked: ${id}`),
    onMarkAllRead: () => alert('Mark all read'),
  },
};

export const Empty: Story = {
  args: {
    notifications: [],
    emptyMessage: 'You\'re all caught up!',
  },
};
