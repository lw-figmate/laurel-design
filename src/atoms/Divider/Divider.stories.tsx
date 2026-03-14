import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [(Story) => <div className="flex h-16 items-center"><Story /></div>],
};

export const BetweenContent: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-4)] w-64">
      <p>Above the divider</p>
      <Divider />
      <p>Below the divider</p>
    </div>
  ),
};

export const VerticalBetweenContent: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-4)] h-8">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
