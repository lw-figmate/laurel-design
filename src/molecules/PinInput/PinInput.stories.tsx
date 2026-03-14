import type { Meta, StoryObj } from '@storybook/react-vite';
import { PinInput } from './PinInput';

const meta = {
  title: 'Molecules/PinInput',
  component: PinInput,
  tags: ['autodocs'],
  argTypes: {
    length: { control: 'number' },
    mask: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { length: 4 },
};

export const SixDigit: Story = {
  args: { length: 6 },
};

export const Masked: Story = {
  args: { length: 4, mask: true },
};

export const Disabled: Story = {
  args: { length: 4, disabled: true },
};

export const Small: Story = {
  args: { length: 4, size: 'sm' },
};

export const Large: Story = {
  args: { length: 4, size: 'lg' },
};
