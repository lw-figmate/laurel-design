import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
import { AVATAR_SIZES } from './Avatar.types';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: AVATAR_SIZES },
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
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
