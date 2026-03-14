import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline, TimelineItem } from './Timeline';

const meta = {
  title: 'Molecules/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem title="Order placed" description="Jan 1, 2024" variant="success" />
      <TimelineItem title="Processing" description="Jan 2, 2024" variant="primary" />
      <TimelineItem title="Shipped" description="Jan 3, 2024" />
      <TimelineItem title="Delivered" description="Pending" />
    </Timeline>
  ),
};

export const Variants: Story = {
  render: () => (
    <Timeline>
      <TimelineItem title="Default" variant="default" />
      <TimelineItem title="Primary" variant="primary" />
      <TimelineItem title="Success" variant="success" />
      <TimelineItem title="Warning" variant="warning" />
      <TimelineItem title="Error" variant="error" />
    </Timeline>
  ),
};
