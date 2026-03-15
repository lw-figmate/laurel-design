import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { INPUT_SIZES } from './Input.types';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: { control: 'select', options: INPUT_SIZES },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'] },
  },
  args: {
    placeholder: 'Enter text…',
  },
  parameters: {
    docs: {
      description: {
        component: 'Single-line text input field. Supports multiple sizes, error state, and all native input types.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: 'Hello, Laurel' },
};

export const Placeholder: Story = {
  args: { placeholder: 'Search components…' },
};

export const Error: Story = {
  args: { error: true, defaultValue: 'Invalid value' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Cannot edit' },
};

export const Small: Story = {
  args: { inputSize: 'sm', placeholder: 'Small input' },
};

export const Large: Story = {
  args: { inputSize: 'lg', placeholder: 'Large input' },
};

export const Password: Story = {
  args: { type: 'password', placeholder: 'Enter password' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)] max-w-sm">
      {INPUT_SIZES.map((size) => (
        <Input key={size} inputSize={size} placeholder={`${size} input`} />
      ))}
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)] max-w-sm">
      <Input placeholder="Default" />
      <Input error placeholder="Error state" />
      <Input disabled placeholder="Disabled state" />
    </div>
  ),
};
