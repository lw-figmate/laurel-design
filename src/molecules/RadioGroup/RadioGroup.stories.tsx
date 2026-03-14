import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './RadioGroup';
import { Radio } from '../../atoms/Radio';

const meta = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    error: { control: 'text' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup label="Preferred contact" name="contact" {...args}>
      <Radio value="email" label="Email" />
      <Radio value="phone" label="Phone" />
      <Radio value="mail" label="Mail" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup label="Plan" name="plan" orientation="horizontal">
      <Radio value="free" label="Free" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <RadioGroup label="Size" name="size" error="Please select a size.">
      <Radio value="s" label="Small" />
      <Radio value="m" label="Medium" />
      <Radio value="l" label="Large" />
    </RadioGroup>
  ),
};
