import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput } from './NumberInput';

const meta = {
  title: 'Molecules/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: 5, label: 'Quantity' },
};

export const WithMinMax: Story = {
  args: { defaultValue: 1, min: 0, max: 10, label: 'Count' },
};

export const CustomStep: Story = {
  args: { defaultValue: 0, step: 5, label: 'Volume' },
};

export const Disabled: Story = {
  args: { defaultValue: 3, disabled: true, label: 'Locked' },
};

export const Small: Story = {
  args: { defaultValue: 0, size: 'sm', label: 'Small' },
};

export const Large: Story = {
  args: { defaultValue: 0, size: 'lg', label: 'Large' },
};
