import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, useToast } from './ToastProvider';
import { Button } from '../../atoms/Button';

function ToastDemo() {
  const { addToast } = useToast();
  return (
    <div className="flex gap-2">
      <Button onClick={() => addToast({ message: 'Info toast', variant: 'info' })} size="sm">Info</Button>
      <Button onClick={() => addToast({ message: 'Success!', variant: 'success' })} size="sm">Success</Button>
      <Button onClick={() => addToast({ message: 'Warning issued', variant: 'warning' })} size="sm">Warning</Button>
      <Button onClick={() => addToast({ message: 'Something went wrong', variant: 'error', duration: 0 })} size="sm">Error (sticky)</Button>
    </div>
  );
}

const meta = {
  title: 'Organisms/ToastProvider',
  component: ToastProvider,
  tags: ['autodocs'],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
