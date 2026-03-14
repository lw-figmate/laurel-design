import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatWidget } from './ChatWidget';

const meta = {
  title: 'Organisms/ChatWidget',
  component: ChatWidget,
  tags: ['autodocs'],
} satisfies Meta<typeof ChatWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    messages: [
      { id: '1', content: 'Hi! How can I help you today?', sender: 'agent', timestamp: '10:00 AM' },
      { id: '2', content: 'I have a question about pricing', sender: 'user', timestamp: '10:01 AM' },
      { id: '3', content: 'Sure! What would you like to know?', sender: 'agent', timestamp: '10:01 AM' },
    ],
    onSend: (msg) => alert(`Sent: ${msg}`),
    title: 'Support',
    agentName: 'Laurel Bot',
    defaultOpen: true,
  },
};

export const Closed: Story = {
  args: {
    messages: [],
    onSend: () => {},
  },
};
