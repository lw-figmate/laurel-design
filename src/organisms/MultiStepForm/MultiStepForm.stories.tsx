import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiStepForm } from './MultiStepForm';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Organisms/MultiStepForm',
  component: MultiStepForm,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-2xl mx-auto py-8"><Story /></div>],
} satisfies Meta<typeof MultiStepForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { title: 'Account', description: 'Basic info', content: <Text as="p">Enter your name and email.</Text> },
      { title: 'Profile', description: 'Details', content: <Text as="p">Upload your photo and bio.</Text> },
      { title: 'Review', description: 'Confirm', content: <Text as="p">Review and submit your information.</Text> },
    ],
    onSubmit: () => alert('Submitted!'),
    onCancel: () => alert('Cancelled'),
  },
};
