import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { CHECKBOX_SIZES } from './Checkbox.types';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checkboxSize: { control: 'select', options: CHECKBOX_SIZES },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 'aria-label': 'Accept terms' },
};

export const Checked: Story = {
  args: { 'aria-label': 'Accept terms', defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { 'aria-label': 'Select all', indeterminate: true },
};

export const Disabled: Story = {
  args: { 'aria-label': 'Accept terms', disabled: true },
};

export const DisabledChecked: Story = {
  args: { 'aria-label': 'Accept terms', disabled: true, defaultChecked: true },
};

export const Small: Story = {
  args: { 'aria-label': 'Accept terms', checkboxSize: 'sm' },
};

export const Large: Story = {
  args: { 'aria-label': 'Accept terms', checkboxSize: 'lg' },
};

export const WithLabel: Story = {
  render: () => (
    <label className="flex items-center gap-[var(--laurel-space-2)] cursor-pointer">
      <Checkbox />
      <span className="text-[length:var(--laurel-font-size-sm)]">I agree to the terms</span>
    </label>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-4)]">
      {CHECKBOX_SIZES.map((size) => (
        <label key={size} className="flex items-center gap-[var(--laurel-space-2)] cursor-pointer">
          <Checkbox checkboxSize={size} />
          <span className="text-[length:var(--laurel-font-size-sm)]">{size}</span>
        </label>
      ))}
    </div>
  ),
};
