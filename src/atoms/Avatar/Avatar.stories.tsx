import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
import { AVATAR_SIZES, AVATAR_SHAPES } from './Avatar.types';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: AVATAR_SIZES },
    shape: { control: 'select', options: AVATAR_SHAPES },
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a user profile image with an initials fallback. Use in user profiles, comment threads, and contact lists.',
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { initials: 'LD' },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=laurel',
    alt: 'User avatar',
  },
};

export const Initials: Story = {
  args: { initials: 'JD' },
};

export const FallbackOnBrokenImage: Story = {
  args: {
    src: 'https://broken-url.invalid/img.png',
    initials: 'FB',
    alt: 'Fallback avatar',
  },
};

export const NoInitials: Story = {
  args: {},
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-3)]">
      {AVATAR_SIZES.map((s) => (
        <Avatar key={s} size={s} initials={s.toUpperCase()} />
      ))}
    </div>
  ),
};

export const AllSizesWithImage: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-3)]">
      {AVATAR_SIZES.map((s, i) => (
        <Avatar key={s} size={s} src={`https://i.pravatar.cc/150?u=${i}`} alt={`User ${s}`} />
      ))}
    </div>
  ),
};

export const Square: Story = {
  args: { initials: 'SQ', shape: 'square' },
};

export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-3)]">
      {AVATAR_SHAPES.map((s) => (
        <Avatar key={s} shape={s} initials={s.slice(0, 2).toUpperCase()} />
      ))}
    </div>
  ),
};
