import type { Meta, StoryObj } from '@storybook/react-vite';
import { MediaGallery } from './MediaGallery';

const meta = {
  title: 'Organisms/MediaGallery',
  component: MediaGallery,
  tags: ['autodocs'],
} satisfies Meta<typeof MediaGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', src: 'https://picsum.photos/400/400?random=1', alt: 'Photo 1', caption: 'Sunset' },
      { id: '2', src: 'https://picsum.photos/400/400?random=2', alt: 'Photo 2' },
      { id: '3', src: 'https://picsum.photos/400/400?random=3', alt: 'Photo 3', caption: 'Mountain' },
      { id: '4', src: 'https://picsum.photos/400/400?random=4', alt: 'Photo 4' },
      { id: '5', src: 'https://picsum.photos/400/400?random=5', alt: 'Photo 5' },
      { id: '6', src: 'https://picsum.photos/400/400?random=6', alt: 'Photo 6' },
    ],
  },
};

export const FourColumns: Story = {
  args: {
    ...Default.args,
    columns: 4,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    emptyContent: <div className="text-center py-12 text-gray-500">No media to display</div>,
  },
};
