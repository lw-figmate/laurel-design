import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    sticky: { control: 'boolean' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <Text as="strong" size="lg" weight="bold">Acme</Text>,
    nav: (
      <div className="flex gap-4">
        <a href="#" className="text-sm hover:underline">Home</a>
        <a href="#" className="text-sm hover:underline">Products</a>
        <a href="#" className="text-sm hover:underline">About</a>
      </div>
    ),
    actions: (
      <div className="flex items-center gap-3">
        <Button size="sm">Sign in</Button>
        <Avatar initials="JD" size="sm" />
      </div>
    ),
  },
};

export const Sticky: Story = {
  args: {
    ...Default.args,
    sticky: true,
  },
};
