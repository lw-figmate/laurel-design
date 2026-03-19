import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './ContextMenu';

const meta = {
  title: 'Molecules/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu
      items={[
        { label: 'Cut' },
        { label: 'Copy' },
        { label: 'Paste' },
        { separator: true, label: '' },
        { label: 'Delete', disabled: false },
      ]}
    >
      <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
        Right-click here
      </div>
    </ContextMenu>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <ContextMenu
      items={[
        { label: 'Cut' },
        { label: 'Copy' },
        { label: 'Paste', disabled: true },
        { separator: true, label: '' },
        { label: 'Delete', disabled: true },
      ]}
    >
      <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
        Right-click here
      </div>
    </ContextMenu>
  ),
};
