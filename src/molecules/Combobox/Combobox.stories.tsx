import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox } from './Combobox';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const meta = {
  title: 'Molecules/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options: fruits, placeholder: 'Select a fruit...' },
};

export const Small: Story = {
  args: { options: fruits, placeholder: 'Select...', size: 'sm' },
};

export const Large: Story = {
  args: { options: fruits, placeholder: 'Select...', size: 'lg' },
};

export const Disabled: Story = {
  args: { options: fruits, placeholder: 'Select...', disabled: true },
};

export const WithError: Story = {
  args: { options: fruits, placeholder: 'Select...', error: true },
};

export const EmptyState: Story = {
  args: { options: [], placeholder: 'Search...', emptyMessage: 'No results found.' },
};
