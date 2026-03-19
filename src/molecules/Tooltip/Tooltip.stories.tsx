import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
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
  parameters: {
    docs: {
      description: {
        component: 'Hover-triggered floating label for supplementary information. Use on icon buttons, truncated text, and abbreviated content.',
      },
    },
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

export const Left: Story = {
  render: () => (
    <div className="flex justify-center py-16">
      <Tooltip content="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};

export const Right: Story = {
  render: () => (
    <div className="flex justify-center py-16">
      <Tooltip content="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const NoDelay: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole('button', { name: 'No delay' }));
    await expect(canvas.getByRole('tooltip')).toBeInTheDocument();
  },
  render: () => (
    <div className="flex justify-center py-16">
      <Tooltip content="Instant tooltip" delay={0}>
        <Button>No delay</Button>
      </Tooltip>
    </div>
  ),
};
