import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardTemplate } from './DashboardTemplate';

const meta = {
  title: 'Templates/DashboardTemplate',
  component: DashboardTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DashboardTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
    breadcrumbs: [{ label: 'Home', href: '#' }, { label: 'Dashboard' }],
    stats: [
      { label: 'Total Users', value: '12,345' },
      { label: 'Revenue', value: '$45,678' },
      { label: 'Orders', value: '892' },
      { label: 'Conversion', value: '3.2%' },
    ],
    children: <div style={{ padding: '2rem', background: '#f9fafb', borderRadius: '8px' }}>Main content area</div>,
  },
};

export const WithSidebar: Story = {
  args: {
    ...Default.args,
    sidebar: <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '8px' }}>Activity sidebar</div>,
  },
};
