import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmDialog } from './ConfirmDialog';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Organisms/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete item</Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => { alert('Confirmed!'); setOpen(false); }}
          title="Delete item?"
        >
          This action cannot be undone. Are you sure you want to delete this item?
        </ConfirmDialog>
      </>
    );
  },
};

export const Danger: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete account</Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title="Delete account?"
          variant="danger"
          confirmLabel="Yes, delete"
          cancelLabel="No, keep"
        >
          All data will be permanently removed.
        </ConfirmDialog>
      </>
    );
  },
};
