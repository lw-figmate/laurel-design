import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';
import { TEXTAREA_SIZES } from './Textarea.types';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    textareaSize: { control: 'select', options: TEXTAREA_SIZES },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    resize: { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
  args: {
    placeholder: 'Enter text…',
    rows: 4,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: 'Hello, Laurel!\nThis is a multiline textarea.' },
};

export const Placeholder: Story = {
  args: { placeholder: 'Write your message…' },
};

export const Error: Story = {
  args: { error: true, defaultValue: 'Invalid content' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Cannot edit' },
};

export const Small: Story = {
  args: { textareaSize: 'sm', placeholder: 'Small textarea' },
};

export const Large: Story = {
  args: { textareaSize: 'lg', placeholder: 'Large textarea' },
};

export const NoResize: Story = {
  args: { resize: 'none', placeholder: 'Cannot resize' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)] max-w-sm">
      {TEXTAREA_SIZES.map((size) => (
        <Textarea key={size} textareaSize={size} placeholder={`${size} textarea`} rows={3} />
      ))}
    </div>
  ),
};
