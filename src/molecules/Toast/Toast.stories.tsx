import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';

const meta = {
  title: 'Molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    message: { control: 'text' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { variant: 'info', message: 'Your session is about to expire.' },
};

export const Success: Story = {
  args: { variant: 'success', message: 'Changes saved successfully.' },
};

export const Warning: Story = {
  args: { variant: 'warning', message: 'Storage is almost full.' },
};

export const Error: Story = {
  args: { variant: 'error', message: 'Failed to upload file.' },
};

export const WithAction: Story = {
  args: { variant: 'success', message: 'Item deleted.', action: { label: 'Undo', onClick: () => {} } },
};

export const Dismissible: Story = {
  args: { variant: 'info', message: 'New update available.', onDismiss: () => {} },
};
