import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';

const meta = {
  title: 'Molecules/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Range input for selecting a numeric value within a min/max range. Supports multiple sizes and an optional value display.',
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: 50, label: 'Volume' },
};

export const WithValue: Story = {
  args: { defaultValue: 75, label: 'Brightness', showValue: true },
};

export const Small: Story = {
  args: { defaultValue: 30, label: 'Small', size: 'sm', showValue: true },
};

export const Large: Story = {
  args: { defaultValue: 60, label: 'Large', size: 'lg', showValue: true },
};

export const CustomRange: Story = {
  args: { defaultValue: 5, min: 0, max: 10, step: 1, label: 'Rating', showValue: true },
};

export const Disabled: Story = {
  args: { defaultValue: 40, label: 'Disabled', disabled: true },
};
