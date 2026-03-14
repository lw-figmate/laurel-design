import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommentThread } from './CommentThread';

const meta = {
  title: 'Organisms/CommentThread',
  component: CommentThread,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentThread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        author: 'Alice Johnson',
        content: 'This is a great feature! Love the attention to detail.',
        timestamp: '2 hours ago',
        replies: [
          {
            id: '2',
            author: 'Bob Smith',
            content: 'Agreed! The UX is really smooth.',
            timestamp: '1 hour ago',
          },
          {
            id: '3',
            author: 'Alice Johnson',
            content: 'Thanks Bob! Spent a lot of time on it.',
            timestamp: '45 min ago',
          },
        ],
      },
      {
        id: '4',
        author: 'Charlie Davis',
        content: 'Would be nice to have dark mode support too.',
        timestamp: '30 min ago',
      },
    ],
    onReply: (parentId, content) => alert(`Reply to ${parentId}: ${content}`),
    onDelete: (id) => alert(`Delete ${id}`),
  },
};

export const Empty: Story = {
  args: {
    comments: [],
    emptyContent: <div className="text-center py-8 text-gray-500">No comments yet. Be the first!</div>,
  },
};
