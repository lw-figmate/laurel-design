import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { variant: 'info', children: 'A new version of this app is available.' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Your account has been verified successfully.' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Your trial expires in 3 days.' },
};

export const Error: Story = {
  args: { variant: 'error', children: 'Service outage detected. We are investigating.' },
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    children: 'A new version is available.',
    action: <Button size="sm" variant="outline">Update now</Button>,
  },
};

export const Dismissible: Story = {
  args: { variant: 'success', children: 'Settings saved.', onDismiss: () => {} },
};
