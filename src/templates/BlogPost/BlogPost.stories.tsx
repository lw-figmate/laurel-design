import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlogPost } from './BlogPost';
import { Avatar } from '../../atoms/Avatar';

const meta = {
  title: 'Templates/BlogPost',
  component: BlogPost,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: '800px', margin: '0 auto' }}><Story /></div>],
} satisfies Meta<typeof BlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Getting Started with React Design Systems',
    author: 'Jane Doe',
    authorAvatar: <Avatar initials="JD" size="sm" />,
    date: 'January 15, 2026',
    readingTime: '7 min read',
    tags: ['React', 'Design Systems', 'UI'],
    backHref: '#',
    children: (
      <div>
        <p>Building a design system from scratch can seem daunting, but with the right approach it becomes a rewarding experience that pays dividends across your entire product.</p>
        <h2>Why Design Systems?</h2>
        <p>A design system provides a single source of truth for your UI components, ensuring consistency and speeding up development.</p>
      </div>
    ),
  },
};

export const WithCoverImage: Story = {
  args: {
    ...Default.args,
    coverImage: 'https://placehold.co/800x400',
    coverImageAlt: 'Blog post cover',
  },
};
