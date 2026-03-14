import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './Carousel';

const meta = {
  title: 'Molecules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    autoPlay: { control: 'boolean' },
    interval: { control: 'number' },
    showDots: { control: 'boolean' },
    showArrows: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const Slide = ({ color, label }: { color: string; label: string }) => (
  <div className={`h-48 flex items-center justify-center text-white font-bold text-xl rounded-lg ${color}`}>
    {label}
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Carousel {...args}>
      <Slide color="bg-blue-500" label="Slide 1" />
      <Slide color="bg-green-500" label="Slide 2" />
      <Slide color="bg-purple-500" label="Slide 3" />
    </Carousel>
  ),
};

export const AutoPlay: Story = {
  render: () => (
    <Carousel autoPlay interval={3000}>
      <Slide color="bg-red-500" label="Auto 1" />
      <Slide color="bg-yellow-500" label="Auto 2" />
      <Slide color="bg-teal-500" label="Auto 3" />
    </Carousel>
  ),
};

export const NoDots: Story = {
  render: () => (
    <Carousel showDots={false}>
      <Slide color="bg-indigo-500" label="A" />
      <Slide color="bg-pink-500" label="B" />
    </Carousel>
  ),
};
