import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from './Code';
import { CODE_SIZES } from './Code.types';

const meta = {
  title: 'Atoms/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: CODE_SIZES },
    block: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'const x = 42;',
  },
  parameters: {
    docs: {
      description: {
        component: 'Renders inline or block code snippets with monospace font and subtle background. Use `block` for multi-line code blocks.',
      },
    },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inline: Story = {
  args: { children: 'npm install' },
  render: (args) => (
    <p>
      Run <Code {...args} /> to get started.
    </p>
  ),
};

export const Block: Story = {
  args: {
    block: true,
    children: `function greet(name: string) {\n  return \`Hello, \${name}!\`;\n}`,
  },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)]">
      {CODE_SIZES.map((size) => (
        <Code key={size} size={size}>
          size=&quot;{size}&quot;
        </Code>
      ))}
    </div>
  ),
};
