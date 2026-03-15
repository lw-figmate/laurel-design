import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';
import { SPINNER_SIZES } from './Spinner.types';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: SPINNER_SIZES },
    label: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Animated loading indicator. Use to signal in-progress operations with an accessible label.',
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const ExtraLarge: Story = {
  args: { size: 'xl' },
};

export const CustomLabel: Story = {
  args: { label: 'Saving…' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-[var(--laurel-space-4)]">
      {SPINNER_SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-[var(--laurel-space-1)]">
          <Spinner size={size} />
          <span className="text-[length:var(--laurel-font-size-xs)] text-[var(--laurel-color-neutral-500)]">{size}</span>
        </div>
      ))}
    </div>
  ),
};
