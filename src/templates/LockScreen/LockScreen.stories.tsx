import type { Meta, StoryObj } from '@storybook/react-vite';
import { LockScreen } from './LockScreen';
import { Avatar } from '../../atoms/Avatar';

const meta = {
  title: 'Templates/LockScreen',
  component: LockScreen,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof LockScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'Jane Doe',
    avatar: <Avatar initials="JD" size="lg" />,
    onUnlock: (password) => alert(`Unlock with: ${password}`),
    onSignOut: () => alert('Sign out'),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Incorrect password. Try again.',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
