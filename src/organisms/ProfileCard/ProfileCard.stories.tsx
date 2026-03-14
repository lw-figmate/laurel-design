import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileCard } from './ProfileCard';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Organisms/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Jane Doe',
    role: 'Product Designer',
    initials: 'JD',
    bio: 'Passionate about creating beautiful, accessible user interfaces.',
    stats: [
      { label: 'Posts', value: 142 },
      { label: 'Followers', value: '2.4k' },
      { label: 'Following', value: 312 },
    ],
    actions: (
      <>
        <Button size="sm">Follow</Button>
        <Button size="sm" variant="outline">Message</Button>
      </>
    ),
  },
};

export const Minimal: Story = {
  args: {
    name: 'John Smith',
    role: 'Engineer',
    initials: 'JS',
  },
};

export const WithAvatar: Story = {
  args: {
    name: 'Alice Johnson',
    role: 'CEO',
    avatarSrc: 'https://i.pravatar.cc/150?img=1',
    bio: 'Leading the future of tech.',
    stats: [
      { label: 'Projects', value: 28 },
      { label: 'Team', value: 15 },
    ],
  },
};
