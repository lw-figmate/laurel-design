import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './DropdownMenu';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['start', 'end'] },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu trigger={<Button>Actions</Button>} {...args}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <div className="flex justify-end">
      <DropdownMenu trigger={<Button>Menu</Button>} align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenu>
    </div>
  ),
};
