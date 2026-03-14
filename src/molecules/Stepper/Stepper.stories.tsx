import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper, Step } from './Stepper';

const meta = {
  title: 'Molecules/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    activeStep: { control: 'number' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  decorators: [(Story) => <div className="max-w-xl"><Story /></div>],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Stepper activeStep={1} {...args}>
      <Step title="Account" description="Create your account" />
      <Step title="Profile" description="Set up your profile" />
      <Step title="Review" description="Review and submit" />
    </Stepper>
  ),
};

export const FirstStep: Story = {
  render: () => (
    <Stepper activeStep={0}>
      <Step title="Cart" />
      <Step title="Shipping" />
      <Step title="Payment" />
      <Step title="Confirm" />
    </Stepper>
  ),
};

export const Complete: Story = {
  render: () => (
    <Stepper activeStep={3}>
      <Step title="Cart" />
      <Step title="Shipping" />
      <Step title="Payment" />
    </Stepper>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stepper activeStep={1} orientation="vertical">
      <Step title="Order placed" description="Your order has been placed." />
      <Step title="Processing" description="We are preparing your order." />
      <Step title="Shipped" description="Your order is on its way." />
      <Step title="Delivered" description="Package delivered." />
    </Stepper>
  ),
};
