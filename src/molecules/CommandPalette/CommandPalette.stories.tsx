import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommandPalette } from './CommandPalette';
import { Button } from '../../atoms/Button';
import type { CommandItem } from './CommandPalette.types';

const commands: CommandItem[] = [
  { id: '1', label: 'Open File', shortcut: '⌘O', group: 'File' },
  { id: '2', label: 'Save File', shortcut: '⌘S', group: 'File' },
  { id: '3', label: 'New Window', shortcut: '⌘N', group: 'File' },
  { id: '4', label: 'Toggle Theme', group: 'View' },
  { id: '5', label: 'Search', description: 'Full-text search', shortcut: '⌘⇧F', group: 'Edit' },
  { id: '6', label: 'Find and Replace', shortcut: '⌘H', group: 'Edit' },
];

const meta = {
  title: 'Molecules/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Palette (⌘K)</Button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          commands={commands}
          onSelect={(cmd) => { console.log('Selected:', cmd.label); setOpen(false); }}
        />
      </>
    );
  },
};
