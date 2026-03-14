import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Molecules/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['rect', 'circle', 'text'] },
    width: { control: 'text' },
    height: { control: 'text' },
    lines: { control: 'number' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rect: Story = {
  args: { variant: 'rect', width: 200, height: 100 },
};

export const Circle: Story = {
  args: { variant: 'circle', width: 48, height: 48 },
};

export const Text: Story = {
  args: { variant: 'text', lines: 3 },
};

export const CardSkeleton: Story = {
  name: 'Card Skeleton',
  render: () => (
    <div className="flex gap-4 items-start">
      <Skeleton variant="circle" width={48} height={48} />
      <div className="flex-1">
        <Skeleton variant="rect" width="60%" height={16} />
        <div className="mt-2">
          <Skeleton variant="text" lines={2} />
        </div>
      </div>
    </div>
  ),
};
