import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
import { Collapsible } from './Collapsible';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Toggle-triggered content section that expands and collapses. Use for progressive disclosure of secondary content.',
      },
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'Show more details',
    children: <Text>Here are the additional details that were hidden until you clicked the trigger.</Text>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: /show more details/i });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  },
};

export const DefaultOpen: Story = {
  args: {
    trigger: 'Advanced settings',
    defaultOpen: true,
    children: <Text>These advanced settings are visible by default.</Text>,
  },
};
