import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible } from './Collapsible';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'Show more details',
    children: <Text>Here are the additional details that were hidden until you clicked the trigger.</Text>,
  },
};

export const DefaultOpen: Story = {
  args: {
    trigger: 'Advanced settings',
    defaultOpen: true,
    children: <Text>These advanced settings are visible by default.</Text>,
  },
};
