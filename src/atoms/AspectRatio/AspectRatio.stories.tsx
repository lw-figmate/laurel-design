import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './AspectRatio';

const meta = {
  title: 'Atoms/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: 'number' },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Widescreen: Story = {
  args: {
    ratio: 16 / 9,
    children: <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">16:9</div>,
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-bold">1:1</div>,
  },
};

export const Photo: Story = {
  args: {
    ratio: 4 / 3,
    children: <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold">4:3</div>,
  },
};
