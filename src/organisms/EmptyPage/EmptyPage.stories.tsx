import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyPage } from './EmptyPage';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Organisms/EmptyPage',
  component: EmptyPage,
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No projects found',
    description: 'Get started by creating your first project.',
    action: <Button>Create Project</Button>,
  },
};

export const WithIllustration: Story = {
  args: {
    title: 'Your inbox is empty',
    description: 'When you receive messages, they will appear here.',
    illustration: <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">📭</div>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filters.',
    action: <Button>Clear Filters</Button>,
    secondaryAction: <Button variant="outline">Go Back</Button>,
  },
};
