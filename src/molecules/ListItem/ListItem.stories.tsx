import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';
import { Avatar } from '../../atoms/Avatar';

const meta = {
  title: 'Molecules/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'text' },
    secondary: { control: 'text' },
    interactive: { control: 'boolean' },
    selected: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-sm border rounded-lg"><Story /></div>],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { primary: 'List item' },
};

export const WithSecondaryText: Story = {
  args: { primary: 'John Doe', secondary: 'john@example.com' },
};

export const WithLeading: Story = {
  args: {
    primary: 'Jane Smith',
    secondary: 'Designer',
    leading: <Avatar name="Jane Smith" size="sm" />,
  },
};

export const Interactive: Story = {
  args: {
    primary: 'Clickable item',
    secondary: 'Click to select',
    interactive: true,
    onClick: () => alert('Clicked!'),
  },
};

export const Selected: Story = {
  args: {
    primary: 'Selected item',
    selected: true,
    leading: <Avatar name="Selected" size="sm" />,
  },
};
