import type { Meta, StoryObj } from '@storybook/react-vite';
import { Blockquote } from './Blockquote';
import { BLOCKQUOTE_SIZES, BLOCKQUOTE_ACCENTS } from './Blockquote.types';

const meta = {
  title: 'Atoms/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: BLOCKQUOTE_SIZES },
    accent: { control: 'select', options: BLOCKQUOTE_ACCENTS },
  },
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Visually distinct quotation block. Use for cited text, testimonials, or callout passages.',
      },
    },
  },
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

export const Small: Story = {
  args: { size: 'sm', children: 'A small quotation.' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'A large quotation for emphasis.' },
};

export const NeutralAccent: Story = {
  args: { accent: 'neutral', children: 'A neutral-accented quote.' },
};

export const PrimaryAccent: Story = {
  args: { accent: 'primary', children: 'A primary-accented quote.' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-4)]">
      {BLOCKQUOTE_SIZES.map((s) => (
        <Blockquote key={s} size={s}>Quote at size {s}</Blockquote>
      ))}
    </div>
  ),
};

export const AllAccents: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-4)]">
      {BLOCKQUOTE_ACCENTS.map((a) => (
        <Blockquote key={a} accent={a}>Quote with {a} accent</Blockquote>
      ))}
    </div>
  ),
};
