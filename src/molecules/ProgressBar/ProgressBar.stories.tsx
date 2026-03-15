import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Molecules/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showValue: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Visual indicator of task completion progress. Supports color variants, sizes, and an optional percentage display.',
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60, label: 'Progress' },
};

export const WithValue: Story = {
  args: { value: 45, label: 'Upload', showValue: true },
};

export const Success: Story = {
  args: { value: 100, variant: 'success', label: 'Complete', showValue: true },
};

export const Warning: Story = {
  args: { value: 75, variant: 'warning', label: 'Storage', showValue: true },
};

export const Error: Story = {
  args: { value: 90, variant: 'error', label: 'Disk usage', showValue: true },
};

export const Small: Story = {
  args: { value: 50, size: 'sm', label: 'Small' },
};

export const Large: Story = {
  args: { value: 50, size: 'lg', label: 'Large' },
};
