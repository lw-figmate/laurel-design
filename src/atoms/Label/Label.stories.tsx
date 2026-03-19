import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';
import { LABEL_SIZES } from './Label.types';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: LABEL_SIZES },
  },
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
  parameters: {
    docs: {
      description: {
        component: 'Form label element with an optional required indicator. Associates with form controls via `htmlFor`.',
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const RequiredAndDisabled: Story = {
  args: { required: true, disabled: true },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-2)]">
      {LABEL_SIZES.map((s) => (
        <Label key={s} size={s}>{s} label</Label>
      ))}
    </div>
  ),
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-1-5)] max-w-sm">
      <Label htmlFor="demo-input" required>
        Full name
      </Label>
      <input
        id="demo-input"
        type="text"
        placeholder="Jane Doe"
        className="rounded-[var(--laurel-radius-md)] border border-[var(--laurel-color-neutral-300)] px-[var(--laurel-space-3)] py-[var(--laurel-space-2)]"
      />
    </div>
  ),
};
