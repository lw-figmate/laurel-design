import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from './Kbd';

const meta = {
  title: 'Atoms/Kbd',
  component: Kbd,
  tags: ['autodocs'],
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
