import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from '../../atoms/Checkbox';

const meta = {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    error: { control: 'text' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <CheckboxGroup label="Select toppings" {...args}>
      <Checkbox value="cheese" label="Cheese" />
      <Checkbox value="pepperoni" label="Pepperoni" />
      <Checkbox value="mushrooms" label="Mushrooms" />
    </CheckboxGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup label="Preferences" orientation="horizontal">
      <Checkbox value="dark" label="Dark mode" />
      <Checkbox value="notify" label="Notifications" />
      <Checkbox value="sound" label="Sound" />
    </CheckboxGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <CheckboxGroup label="Required selection" error="Please select at least one option.">
      <Checkbox value="a" label="Option A" />
      <Checkbox value="b" label="Option B" />
    </CheckboxGroup>
  ),
};
