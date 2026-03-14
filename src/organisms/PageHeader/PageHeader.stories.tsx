import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from './PageHeader';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
    description: 'Overview of your workspace',
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: 'Edit User',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Users', href: '/users' },
      { label: 'Edit User' },
    ],
  },
};

export const WithActions: Story = {
  args: {
    title: 'Team Members',
    description: 'Manage your team',
    actions: (
      <>
        <Button variant="outline">Export</Button>
        <Button>Invite Member</Button>
      </>
    ),
  },
};

export const Full: Story = {
  args: {
    title: 'Project Settings',
    description: 'Configure your project settings and preferences.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Settings' },
    ],
    actions: <Button>Save</Button>,
  },
};
