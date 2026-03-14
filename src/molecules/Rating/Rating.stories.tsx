import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './Rating';

const meta = {
  title: 'Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    readonly: { control: 'boolean' },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: 3 },
};

export const Readonly: Story = {
  args: { value: 4, readonly: true },
};

export const Small: Story = {
  args: { defaultValue: 2, size: 'sm' },
};

export const Large: Story = {
  args: { defaultValue: 5, size: 'lg' },
};

export const TenStars: Story = {
  args: { defaultValue: 7, max: 10, size: 'sm' },
};
