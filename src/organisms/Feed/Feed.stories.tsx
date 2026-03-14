import type { Meta, StoryObj } from '@storybook/react-vite';
import { Feed } from './Feed';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import type { FeedItem } from './Feed.types';

const items: FeedItem[] = [
  { id: '1', author: 'Alice', avatarInitials: 'AJ', timestamp: '2h ago', content: <Text as="p" size="sm">Just shipped a new feature! 🚀</Text>, actions: <Button size="sm" variant="ghost">Like</Button> },
  { id: '2', author: 'Bob', avatarInitials: 'BS', timestamp: '3h ago', content: <Text as="p" size="sm">Working on the design system. Loving the progress.</Text>, actions: <Button size="sm" variant="ghost">Like</Button> },
  { id: '3', author: 'Carol', avatarInitials: 'CW', timestamp: '5h ago', content: <Text as="p" size="sm">Anyone else excited about the new API?</Text> },
];

const meta = {
  title: 'Organisms/Feed',
  component: Feed,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-xl"><Story /></div>],
} satisfies Meta<typeof Feed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
  },
};

export const WithPagination: Story = {
  args: {
    items,
    pageSize: 2,
  },
};
