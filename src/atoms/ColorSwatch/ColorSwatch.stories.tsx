import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSwatch } from './ColorSwatch';
import { COLOR_SWATCH_SHAPES } from './ColorSwatch.types';

const meta = {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    selected: { control: 'boolean' },
    shape: { control: 'select', options: COLOR_SWATCH_SHAPES },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a color sample with an optional selection indicator. Use in color pickers and palette displays.',
      },
    },
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

export const Square: Story = {
  args: { color: '#3b82f6', shape: 'square' },
};

export const Disabled: Story = {
  args: { color: '#3b82f6', disabled: true },
};

export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      {COLOR_SWATCH_SHAPES.map((s) => (
        <ColorSwatch key={s} color="#3b82f6" shape={s} />
      ))}
    </div>
  ),
};
