import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './ScrollArea';

const meta = {
  title: 'Molecules/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    maxHeight: { control: 'text' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxHeight: 200,
    children: (
      <div className="space-y-2 p-2">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="p-2 bg-gray-50 rounded text-sm">Item {i + 1}</div>
        ))}
      </div>
    ),
  },
};
