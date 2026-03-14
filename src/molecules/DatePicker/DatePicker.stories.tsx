import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Select a date' },
};

export const WithValue: Story = {
  args: { value: new Date(2024, 5, 15) },
};

export const Disabled: Story = {
  args: { placeholder: 'Select date', disabled: true },
};
