import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthPage } from './AuthPage';
import { LoginForm } from '../../organisms/LoginForm';

const meta = {
  title: 'Templates/AuthPage',
  component: AuthPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Split: Story = {
  args: {
    variant: 'split',
    logo: <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Logo</div>,
    sideContent: <p style={{ color: 'white', fontSize: '1.25rem' }}>Welcome to our platform</p>,
    children: <LoginForm onSubmit={() => {}} forgotPasswordHref="#" signUpHref="#" />,
  },
};

export const Centered: Story = {
  args: {
    variant: 'centered',
    logo: <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Logo</div>,
    children: <LoginForm onSubmit={() => {}} />,
    footer: <p>Terms of Service</p>,
  },
};
