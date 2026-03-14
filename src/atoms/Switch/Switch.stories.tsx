import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';
import { SWITCH_SIZES } from './Switch.types';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    switchSize: { control: 'select', options: SWITCH_SIZES },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 'aria-label': 'Enable notifications' },
};

export const Checked: Story = {
  args: { 'aria-label': 'Enable notifications', defaultChecked: true },
};

export const Disabled: Story = {
  args: { 'aria-label': 'Enable notifications', disabled: true },
};

export const DisabledChecked: Story = {
  args: { 'aria-label': 'Enable notifications', disabled: true, checked: true },
};

export const Small: Story = {
  args: { 'aria-label': 'Enable notifications', switchSize: 'sm' },
};

export const Large: Story = {
  args: { 'aria-label': 'Enable notifications', switchSize: 'lg' },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-3)]">
      <Switch aria-label="Dark mode" defaultChecked />
      <span className="text-[length:var(--laurel-font-size-sm)]">Dark mode</span>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--laurel-space-4)]">
      {SWITCH_SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-[var(--laurel-space-1)]">
          <Switch switchSize={size} aria-label={size} defaultChecked />
          <span className="text-[length:var(--laurel-font-size-xs)] text-[var(--laurel-color-neutral-500)]">{size}</span>
        </div>
      ))}
    </div>
  ),
};
