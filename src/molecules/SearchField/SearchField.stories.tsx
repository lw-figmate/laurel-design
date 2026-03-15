import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from './SearchField';
import { INPUT_SIZES } from '../../atoms/Input/Input.types';
import { fn } from 'storybook/test';

const meta = {
  title: 'Molecules/SearchField',
  component: SearchField,
  tags: ['autodocs'],
  argTypes: {
    inputSize: { control: 'select', options: INPUT_SIZES },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Search…',
    onSearch: fn(),
    onClear: fn(),
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Text input with built-in search icon and clear button. Fires `onSearch` on Enter and `onClear` when the field is cleared.',
      },
    },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Search components…' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Small: Story = {
  args: { inputSize: 'sm', placeholder: 'Quick search…' },
};

export const Large: Story = {
  args: { inputSize: 'lg', placeholder: 'Search everything…' },
};

export const WithoutClear: Story = {
  args: { onClear: undefined },
};

export const Error: Story = {
  args: { error: true, placeholder: 'Invalid search' },
};
