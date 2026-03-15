import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';
import { TAG_VARIANTS, TAG_SIZES } from './Tag.types';
import { fn } from 'storybook/test';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: TAG_VARIANTS },
    size: { control: 'select', options: TAG_SIZES },
  },
  args: {
    children: 'Tag',
  },
  parameters: {
    docs: {
      description: {
        component: 'Small categorization label for user-generated content like tags and filters.',
      },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
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

export const Dismissible: Story = {
  args: { onDismiss: fn(), children: 'Removable' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--laurel-space-2)]">
      {TAG_VARIANTS.map((variant) => (
        <Tag key={variant} variant={variant}>
          {variant}
        </Tag>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-2)]">
      {TAG_SIZES.map((size) => (
        <Tag key={size} size={size}>
          {size}
        </Tag>
      ))}
    </div>
  ),
};
