import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    title: { control: 'text' },
  },
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { variant: 'info', children: 'This is an informational alert.' },
};

export const Success: Story = {
  args: { variant: 'success', title: 'Success!', children: 'Your changes have been saved.' },
};

export const Warning: Story = {
  args: { variant: 'warning', title: 'Warning', children: 'Your session will expire in 5 minutes.' },
};

export const Error: Story = {
  args: { variant: 'error', title: 'Error', children: 'Failed to save changes. Please try again.' },
};

export const Dismissible: Story = {
  args: { variant: 'info', title: 'Heads up', children: 'You can dismiss this alert.', onDismiss: () => {} },
};

export const WithTitle: Story = {
  args: { variant: 'info', title: 'Did you know?', children: 'Alerts can have titles for additional context.' },
};
