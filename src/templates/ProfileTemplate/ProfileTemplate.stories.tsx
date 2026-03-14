import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileTemplate } from './ProfileTemplate';
import { Avatar } from '../../atoms/Avatar';

const meta = {
  title: 'Templates/ProfileTemplate',
  component: ProfileTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ProfileTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Jane Doe',
    bio: 'Software engineer & open-source contributor.',
    avatar: <Avatar initials="JD" size="lg" />,
    stats: [
      { label: 'Posts', value: 42 },
      { label: 'Followers', value: '1.2K' },
      { label: 'Following', value: 256 },
    ],
    tabs: [
      { label: 'Posts', id: 'posts' },
      { label: 'About', id: 'about' },
      { label: 'Projects', id: 'projects' },
    ],
    activeTab: 'posts',
    children: <div style={{ padding: '1rem' }}>User posts here</div>,
  },
};
