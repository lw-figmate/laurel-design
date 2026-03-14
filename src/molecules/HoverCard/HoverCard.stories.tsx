import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard } from './HoverCard';
import { Avatar } from '../../atoms/Avatar';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <HoverCard
      trigger={<a href="#" className="text-blue-600 underline">@alice</a>}
      {...args}
    >
      <div className="flex gap-3">
        <Avatar initials="AL" />
        <div>
          <Text size="sm" weight="semibold">Alice Johnson</Text>
          <Text size="xs">Software Engineer at Acme Corp</Text>
        </div>
      </div>
    </HoverCard>
  ),
};
