import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuItem } from './Menu';
import { Divider } from '../../atoms/Divider';

const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Archive</MenuItem>
      <Divider />
      <MenuItem>Delete</MenuItem>
    </Menu>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Menu>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem disabled>Paste</MenuItem>
    </Menu>
  ),
};
