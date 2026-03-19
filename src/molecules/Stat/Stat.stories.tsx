import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from './Stat';

const meta = {
  title: 'Molecules/Stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
    trend: { control: 'select', options: [undefined, 'up', 'down', 'none'] },
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Total revenue', value: '$45,231' },
};

export const TrendUp: Story = {
  args: { label: 'New users', value: '2,340', helpText: '+12.5%', trend: 'up' },
};

export const TrendDown: Story = {
  args: { label: 'Bounce rate', value: '24.3%', helpText: '-3.1%', trend: 'down' },
};

export const TrendNone: Story = {
  args: { label: 'Active users', value: '5,678', helpText: 'No change', trend: 'none' },
};

export const WithHelpText: Story = {
  args: { label: 'Response time', value: '120ms', helpText: 'Average over 24h' },
};

export const StatGroup: Story = {
  name: 'Stat Group',
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Stat label="Revenue" value="$12,345" helpText="+8.2%" trend="up" />
      <Stat label="Orders" value="1,234" helpText="+3.1%" trend="up" />
      <Stat label="Returns" value="56" helpText="-12%" trend="down" />
    </div>
  ),
};
