import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatDashboard } from './StatDashboard';

const meta = {
  title: 'Organisms/StatDashboard',
  component: StatDashboard,
  tags: ['autodocs'],
} satisfies Meta<typeof StatDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Overview',
    stats: [
      { label: 'Total Revenue', value: '$45,231', trend: 'up', helpText: '+20.1% from last month' },
      { label: 'Subscriptions', value: '+2,350', trend: 'up', helpText: '+12.4%' },
      { label: 'Active Users', value: '12,234', trend: 'down', helpText: '-3.2%' },
      { label: 'Bounce Rate', value: '21.3%', helpText: 'Within target' },
    ],
  },
};

export const TwoColumns: Story = {
  args: {
    stats: [
      { label: 'Revenue', value: '$12,345', trend: 'up', helpText: '+5%' },
      { label: 'Orders', value: '567', trend: 'down', helpText: '-2%' },
    ],
    columns: 2,
  },
};
