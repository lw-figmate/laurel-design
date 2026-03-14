import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSwatch } from './ColorSwatch';

const meta = {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    selected: { control: 'boolean' },
  },
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { color: '#3b82f6' },
};

export const Selected: Story = {
  args: { color: '#ef4444', selected: true },
};

export const Palette: Story = {
  render: () => (
    <div className="flex gap-2">
      {['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'].map((c) => (
        <ColorSwatch key={c} color={c} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <ColorSwatch color="#3b82f6" size="sm" />
      <ColorSwatch color="#3b82f6" size="md" />
      <ColorSwatch color="#3b82f6" size="lg" />
    </div>
  ),
};
