import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './Button.types';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: BUTTON_VARIANTS,
    },
    size: {
      control: 'select',
      options: BUTTON_SIZES,
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
  },
  parameters: {
    docs: {
      description: {
        component: 'Interactive element that triggers an action. Available in primary, secondary, ghost, and danger variants across three sizes.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const LongText: Story = {
  args: { children: 'This is a button with a much longer label than usual' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--laurel-space-4)] items-center">
      {BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--laurel-space-4)] items-center">
      {BUTTON_SIZES.map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};
