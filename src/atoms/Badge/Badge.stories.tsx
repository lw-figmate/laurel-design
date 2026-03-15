import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { BADGE_VARIANTS, BADGE_SIZES } from './Badge.types';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: BADGE_VARIANTS },
    size: { control: 'select', options: BADGE_SIZES },
    children: { control: 'text' },
  },
  args: {
    children: 'Badge',
  },
  parameters: {
    docs: {
      description: {
        component: 'Small status indicator label. Use to highlight counts, categories, or status information.',
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary', children: 'New' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Active' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Pending' },
};

export const Error: Story = {
  args: { variant: 'error', children: 'Failed' },
};

export const Small: Story = {
  args: { size: 'sm', children: '3' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Published' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--laurel-space-3)] items-center">
      {BADGE_VARIANTS.map((v) => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--laurel-space-3)] items-center">
      {BADGE_SIZES.map((s) => (
        <Badge key={s} size={s}>{s}</Badge>
      ))}
    </div>
  ),
};
