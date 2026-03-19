import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup } from './AvatarGroup';
import { Avatar } from '../../atoms/Avatar';

const meta = {
  title: 'Molecules/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'number' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar initials="AL" />
      <Avatar initials="BM" />
      <Avatar initials="CJ" />
      <Avatar initials="DK" />
    </AvatarGroup>
  ),
};

export const WithMax: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar initials="AL" />
      <Avatar initials="BM" />
      <Avatar initials="CJ" />
      <Avatar initials="DK" />
      <Avatar initials="EL" />
    </AvatarGroup>
  ),
};

export const Small: Story = {
  render: () => (
    <AvatarGroup size="sm">
      <Avatar initials="AL" />
      <Avatar initials="BM" />
      <Avatar initials="CJ" />
    </AvatarGroup>
  ),
};

export const ExtraSmall: Story = {
  render: () => (
    <AvatarGroup size="xs">
      <Avatar initials="AL" />
      <Avatar initials="BM" />
      <Avatar initials="CJ" />
    </AvatarGroup>
  ),
};

export const Large: Story = {
  render: () => (
    <AvatarGroup size="lg">
      <Avatar initials="AL" />
      <Avatar initials="BM" />
      <Avatar initials="CJ" />
    </AvatarGroup>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <AvatarGroup size="xl">
      <Avatar initials="AL" />
      <Avatar initials="BM" />
      <Avatar initials="CJ" />
    </AvatarGroup>
  ),
};
