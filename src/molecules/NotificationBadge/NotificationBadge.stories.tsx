import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationBadge } from './NotificationBadge';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/NotificationBadge',
  component: NotificationBadge,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    max: { control: 'number' },
    dot: { control: 'boolean' },
    variant: { control: 'select', options: ['primary', 'error'] },
  },
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { count: 5, children: <Button>Inbox</Button> },
};

export const HighCount: Story = {
  args: { count: 150, max: 99, children: <Button>Notifications</Button> },
};

export const Dot: Story = {
  args: { dot: true, children: <Button>Messages</Button> },
};

export const ErrorVariant: Story = {
  args: { count: 3, variant: 'error', children: <Button>Alerts</Button> },
};

export const Zero: Story = {
  args: { count: 0, children: <Button>Inbox</Button> },
};
