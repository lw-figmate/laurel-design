import type { Meta, StoryObj } from '@storybook/react-vite';
import { Blockquote } from './Blockquote';

const meta = {
  title: 'Atoms/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'The best way to predict the future is to invent it.' },
};

export const WithCite: Story = {
  args: {
    cite: 'https://example.com',
    children: 'Design is not just what it looks like and feels like. Design is how it works.',
  },
};
