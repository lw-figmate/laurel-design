import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroSection } from './HeroSection';
import { Button } from '../../atoms/Button';

const meta = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Build better products faster',
    subtext: 'A modern design system for React applications with accessible, composable components.',
    primaryAction: <Button>Get Started</Button>,
    secondaryAction: <Button variant="outline">Learn More</Button>,
  },
};

export const LeftAligned: Story = {
  args: {
    ...Default.args,
    align: 'left',
  },
};

export const WithBackgroundImage: Story = {
  args: {
    headline: 'Explore the world',
    subtext: 'Discover amazing destinations and experiences.',
    primaryAction: <Button>Start Exploring</Button>,
    backgroundImage: 'https://picsum.photos/1920/600',
  },
};

export const WithMedia: Story = {
  args: {
    headline: 'Ship with confidence',
    subtext: 'Our platform helps you deliver quality software.',
    primaryAction: <Button>Try Free</Button>,
    align: 'left',
    media: <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">Illustration</div>,
  },
};
