import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from './Kbd';
import { KBD_SIZES, KBD_VARIANTS } from './Kbd.types';

const meta = {
  title: 'Atoms/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: KBD_SIZES },
    variant: { control: 'select', options: KBD_VARIANTS },
  },
  parameters: {
    docs: {
      description: {
        component: 'Renders a keyboard key or shortcut in a styled `<kbd>` element. Use in documentation and shortcut hints.',
      },
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '⌘' },
};

export const Shortcut: Story = {
  render: () => (
    <span className="inline-flex items-center gap-1 text-sm">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search
    </span>
  ),
};

export const CtrlC: Story = {
  name: 'Ctrl+C',
  render: () => (
    <span className="inline-flex items-center gap-1 text-sm">
      <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
    </span>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-3)]">
      {KBD_SIZES.map((s) => (
        <Kbd key={s} size={s}>⌘</Kbd>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-3)]">
      {KBD_VARIANTS.map((v) => (
        <Kbd key={v} variant={v}>⌘</Kbd>
      ))}
    </div>
  ),
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Esc' },
};

export const Plain: Story = {
  args: { variant: 'plain', children: 'Enter' },
};

export const Small: Story = {
  args: { size: 'sm', children: '⌘' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Space' },
};
