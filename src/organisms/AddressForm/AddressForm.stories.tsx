import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddressForm } from './AddressForm';

const meta = {
  title: 'Organisms/AddressForm',
  component: AddressForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddressForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
  },
};

export const WithDefaults: Story = {
  args: {
    defaultValues: {
      street1: '123 Main Street',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
      country: 'US',
    },
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    onCancel: () => alert('Cancelled'),
  },
};

export const Loading: Story = {
  args: {
    onSubmit: () => {},
    loading: true,
  },
};
