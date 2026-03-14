import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: 'number' },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center py-16">
      <Tooltip content="This is a tooltip" {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const Bottom: Story = {
  render: () => (
    <div className="flex justify-center py-16">
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
    </div>
  ),
};

export const NoDelay: Story = {
  render: () => (
    <div className="flex justify-center py-16">
      <Tooltip content="Instant tooltip" delay={0}>
        <Button>No delay</Button>
      </Tooltip>
    </div>
  ),
};
