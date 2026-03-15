import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField';
import { INPUT_SIZES } from '../../atoms/Input/Input.types';

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    errorMessage: { control: 'text' },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    inputSize: { control: 'select', options: INPUT_SIZES },
    placeholder: { control: 'text' },
  },
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Combines Label, Input, helper text, and error message into a complete form field. Handles required indicators and validation display.',
      },
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be 3–20 characters, no spaces.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'not-an-email',
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Jane Doe',
    required: true,
  },
};

export const RequiredWithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    required: true,
    errorMessage: 'Password must be at least 8 characters.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Organization',
    defaultValue: 'Laurel Inc.',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Zip code',
    inputSize: 'sm',
    placeholder: '12345',
  },
};

export const Large: Story = {
  args: {
    label: 'Message',
    inputSize: 'lg',
    placeholder: 'Type your message…',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--laurel-space-6)]">
      <FormField label="Default" placeholder="Default state" />
      <FormField label="Helper text" placeholder="With helper" helperText="Some helpful guidance." />
      <FormField label="Error" defaultValue="Bad value" errorMessage="This field is invalid." />
      <FormField label="Required" placeholder="Required field" required />
      <FormField label="Disabled" defaultValue="Read-only" disabled />
    </div>
  ),
};
