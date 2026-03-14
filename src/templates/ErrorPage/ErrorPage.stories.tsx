import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorPage } from './ErrorPage';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Templates/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    code: 404,
    title: 'Page not found',
    description: 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    action: <Button>Go home</Button>,
    secondaryAction: <Button variant="outline">Go back</Button>,
  },
};

export const ServerError: Story = {
  args: {
    code: 500,
    title: 'Internal server error',
    description: 'Something went wrong on our end. Please try again later.',
    action: <Button>Retry</Button>,
    supportHref: '/support',
  },
};

export const Forbidden: Story = {
  args: {
    code: 403,
    title: 'Access denied',
    description: 'You don\'t have permission to access this resource.',
    action: <Button>Go home</Button>,
  },
};
