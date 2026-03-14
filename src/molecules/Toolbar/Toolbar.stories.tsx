import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar, ToolbarGroup } from './Toolbar';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toolbar {...args}>
      <ToolbarGroup>
        <Button size="sm" variant="ghost">Bold</Button>
        <Button size="sm" variant="ghost">Italic</Button>
        <Button size="sm" variant="ghost">Underline</Button>
      </ToolbarGroup>
      <ToolbarGroup>
        <Button size="sm" variant="ghost">Left</Button>
        <Button size="sm" variant="ghost">Center</Button>
        <Button size="sm" variant="ghost">Right</Button>
      </ToolbarGroup>
    </Toolbar>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Toolbar orientation="vertical">
      <ToolbarGroup>
        <Button size="sm" variant="ghost">Cut</Button>
        <Button size="sm" variant="ghost">Copy</Button>
        <Button size="sm" variant="ghost">Paste</Button>
      </ToolbarGroup>
    </Toolbar>
  ),
};
