import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLayout } from './PageLayout';

const meta = {
  title: 'Organisms/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: <header className="bg-white border-b p-4">Header</header>,
    sidebar: <aside className="w-64 bg-gray-50 border-r p-4">Sidebar</aside>,
    footer: <footer className="bg-gray-50 border-t p-4">Footer</footer>,
    children: <div className="p-4">Main content goes here</div>,
  },
};

export const WithoutSidebar: Story = {
  args: {
    header: <header className="bg-white border-b p-4">Header</header>,
    footer: <footer className="bg-gray-50 border-t p-4">Footer</footer>,
    children: <div className="p-4">Full-width content</div>,
  },
};

export const WithMaxWidth: Story = {
  args: {
    header: <header className="bg-white border-b p-4">Header</header>,
    children: <div className="p-4">Constrained content</div>,
    maxWidth: '960px',
  },
};
