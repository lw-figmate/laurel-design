import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Email address',
    htmlFor: 'email',
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
