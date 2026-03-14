import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sheet } from './Sheet';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Sheet open={open} onClose={() => setOpen(false)} title="Share">
          <Text>Share this page with your team.</Text>
        </Sheet>
      </>
    );
  },
};

export const WithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Sheet open={open} onClose={() => setOpen(false)}>
          <Text>A sheet without a title.</Text>
        </Sheet>
      </>
    );
  },
};
