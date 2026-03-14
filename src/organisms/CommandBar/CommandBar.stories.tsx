import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommandBar } from './CommandBar';

const meta = {
  title: 'Organisms/CommandBar',
  component: CommandBar,
  tags: ['autodocs'],
} satisfies Meta<typeof CommandBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    commands: [
      { id: '1', label: 'New File', group: 'Actions', shortcut: '⌘N' },
      { id: '2', label: 'Search', group: 'Actions', shortcut: '⌘F' },
      { id: '3', label: 'Settings', group: 'Navigation' },
      { id: '4', label: 'Sign Out', group: 'Account' },
    ],
    onSelect: (cmd) => alert(`Selected: ${cmd.label}`),
    placeholder: 'Type a command or search...',
  },
};
