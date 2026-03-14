import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { SELECT_SIZES } from './Select.types';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    selectSize: { control: 'select', options: SELECT_SIZES },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 'aria-label': 'Country' },
  render: (args) => (
    <Select {...args}>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </Select>
  ),
};

export const WithPlaceholder: Story = {
  args: { 'aria-label': 'Country', placeholder: 'Select a country…' },
  render: (args) => (
    <Select {...args} defaultValue="">
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </Select>
  ),
};

export const Error: Story = {
  args: { 'aria-label': 'Country', error: true },
  render: (args) => (
    <Select {...args}>
      <option value="us">United States</option>
    </Select>
  ),
};

export const Disabled: Story = {
  args: { 'aria-label': 'Country', disabled: true },
  render: (args) => (
    <Select {...args}>
      <option value="us">United States</option>
    </Select>
  ),
};

export const Small: Story = {
  args: { 'aria-label': 'Country', selectSize: 'sm' },
  render: (args) => (
    <Select {...args}>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </Select>
  ),
};

export const Large: Story = {
  args: { 'aria-label': 'Country', selectSize: 'lg' },
  render: (args) => (
    <Select {...args}>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </Select>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-3)] max-w-sm">
      {SELECT_SIZES.map((size) => (
        <Select key={size} selectSize={size} aria-label={size}>
          <option>{size} select</option>
        </Select>
      ))}
    </div>
  ),
};
