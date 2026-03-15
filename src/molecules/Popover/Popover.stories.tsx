import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
import { Popover } from './Popover';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Click-triggered floating panel for inline forms, details, or contextual information. Supports four placement directions.',
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Click me'));
    await expect(canvas.getByRole('dialog')).toBeInTheDocument();
    await expect(canvas.getByText('This is popover content.')).toBeInTheDocument();
  },
  render: (args) => (
    <div className="flex justify-center py-20">
      <Popover trigger={<Button>Click me</Button>} {...args}>
        <Text size="sm">This is popover content.</Text>
      </Popover>
    </div>
  ),
};

export const Top: Story = {
  render: () => (
    <div className="flex justify-center py-20">
      <Popover trigger={<Button>Top</Button>} placement="top">
        <Text size="sm">Popover on top</Text>
      </Popover>
    </div>
  ),
};

export const Right: Story = {
  render: () => (
    <div className="flex justify-center py-20">
      <Popover trigger={<Button>Right</Button>} placement="right">
        <Text size="sm">Popover on right</Text>
      </Popover>
    </div>
  ),
};
