import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';
import { RADIO_SIZES } from './Radio.types';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    radioSize: { control: 'select', options: RADIO_SIZES },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Single-selection form control. Use within a RadioGroup for mutually exclusive option sets.',
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 'aria-label': 'Option A' },
};

export const Checked: Story = {
  args: { 'aria-label': 'Option A', defaultChecked: true },
};

export const Disabled: Story = {
  args: { 'aria-label': 'Option A', disabled: true },
};

export const Small: Story = {
  args: { 'aria-label': 'Option A', radioSize: 'sm' },
};

export const Large: Story = {
  args: { 'aria-label': 'Option A', radioSize: 'lg' },
};

export const RadioGroup: Story = {
  render: () => (
    <fieldset className="flex flex-col gap-[var(--laurel-space-2)]">
      <legend className="text-[length:var(--laurel-font-size-sm)] font-[var(--laurel-font-weight-medium)] mb-[var(--laurel-space-1)]">
        Favorite color
      </legend>
      {['Red', 'Green', 'Blue'].map((color) => (
        <label key={color} className="flex items-center gap-[var(--laurel-space-2)] cursor-pointer">
          <Radio name="color" value={color.toLowerCase()} />
          <span className="text-[length:var(--laurel-font-size-sm)]">{color}</span>
        </label>
      ))}
    </fieldset>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-4)]">
      {RADIO_SIZES.map((size) => (
        <label key={size} className="flex items-center gap-[var(--laurel-space-2)] cursor-pointer">
          <Radio radioSize={size} name="sizes" value={size} />
          <span className="text-[length:var(--laurel-font-size-sm)]">{size}</span>
        </label>
      ))}
    </div>
  ),
};
