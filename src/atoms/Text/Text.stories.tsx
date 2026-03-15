import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import { TEXT_SIZES, TEXT_WEIGHTS, TEXT_ELEMENTS } from './Text.types';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: TEXT_ELEMENTS },
    size: { control: 'select', options: TEXT_SIZES },
    weight: { control: 'select', options: TEXT_WEIGHTS },
    truncate: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  parameters: {
    docs: {
      description: {
        component: 'Typography primitive for rendering text with consistent font sizes and weights. Renders as any inline or block text element via the `as` prop.',
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)]">
      {TEXT_SIZES.map((size) => (
        <Text key={size} size={size}>
          {size} — The quick brown fox jumps over the lazy dog.
        </Text>
      ))}
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)]">
      {TEXT_WEIGHTS.map((weight) => (
        <Text key={weight} weight={weight}>
          {weight} — The quick brown fox jumps over the lazy dog.
        </Text>
      ))}
    </div>
  ),
};

export const Bold: Story = {
  args: { weight: 'bold' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Heading: Story = {
  args: { size: '3xl', weight: 'bold' },
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children:
      'This is a very long piece of text that should be truncated with an ellipsis when it overflows its container.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const AsSpan: Story = {
  args: { as: 'span', children: 'I am a span element' },
};

export const AsLabel: Story = {
  args: { as: 'label', children: 'I am a label element' },
};
