import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './DropdownMenu';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['start', 'end'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Trigger-activated floating menu of actions. Closes automatically on item selection or outside click.',
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Actions'));
    await expect(canvas.getByRole('menu')).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
  },
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

export const WithDisabledItem: Story = {
  render: () => (
    <DropdownMenu trigger={<Button>Actions</Button>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem disabled>Duplicate</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem disabled>Delete</DropdownMenuItem>
    </DropdownMenu>
  ),
};
