import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './EmptyState';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  decorators: [(Story) => <div className="max-w-md mx-auto"><Story /></div>],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
  },
};

export const WithIcon: Story = {
  args: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12">
        <path fillRule="evenodd" d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4.162a3 3 0 0 0-.133-.882l-2.412-7.838A3 3 0 0 0 18.088 3H6.912Z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Your inbox is empty',
    description: 'Check back later for new messages.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'No projects yet',
    description: 'Get started by creating your first project.',
    action: <Button>Create project</Button>,
  },
};
