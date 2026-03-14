import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-md mx-auto py-12"><Story /></div>],
  argTypes: {
    loading: { control: 'boolean' },
    error: { control: 'text' },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (creds) => alert(JSON.stringify(creds)),
    forgotPasswordHref: '#',
    signUpHref: '#',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Invalid email or password.',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
