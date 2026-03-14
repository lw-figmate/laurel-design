import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './Drawer';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['left', 'right'] },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Settings">
          <Text>Drawer content goes here.</Text>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} placement="left" title="Navigation">
          <Text>Navigation content goes here.</Text>
        </Drawer>
      </>
    );
  },
};
