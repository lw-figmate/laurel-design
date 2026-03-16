import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyPage } from './EmptyPage';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

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
    illustration: <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><Icon size="xl" label="Empty inbox"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 12h-4a3 3 0 0 1-6 0H5V5h14v10Z" /></Icon></div>,
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
