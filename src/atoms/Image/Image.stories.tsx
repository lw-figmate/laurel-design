import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './Image';
import { IMAGE_FITS, IMAGE_RADII } from './Image.types';

const SAMPLE_SRC = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop';

const meta = {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    fit: { control: 'select', options: IMAGE_FITS },
    radius: { control: 'select', options: IMAGE_RADII },
    aspectRatio: { control: 'text' },
  },
  args: {
    src: SAMPLE_SRC,
    alt: 'Landscape',
    className: 'w-64',
  },
  parameters: {
    docs: {
      description: {
        component: 'Enhanced img element with built-in object-fit, border-radius, and aspect ratio controls.',
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Contain: Story = {
  args: { fit: 'contain', className: 'w-64 h-48 bg-[var(--laurel-color-neutral-100)]' },
};

export const RoundedLg: Story = {
  args: { radius: 'lg' },
};

export const Circle: Story = {
  args: { radius: 'full', className: 'w-32 h-32' },
};

export const AspectRatio: Story = {
  args: { aspectRatio: '16/9', className: 'w-64' },
};

export const WithFallback: Story = {
  args: {
    src: '/broken-url.jpg',
    fallback: (
      <div className="flex items-center justify-center w-64 h-48 bg-[var(--laurel-color-neutral-100)] rounded-[var(--laurel-radius-md)] text-[var(--laurel-color-neutral-400)]">
        Image unavailable
      </div>
    ),
  },
};

export const AllRadii: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--laurel-space-4)]">
      {IMAGE_RADII.map((r) => (
        <div key={r} className="flex flex-col items-center gap-[var(--laurel-space-1)]">
          <Image src={SAMPLE_SRC} alt={r} radius={r} className="w-24 h-24" />
          <span className="text-[length:var(--laurel-font-size-xs)] text-[var(--laurel-color-neutral-500)]">{r}</span>
        </div>
      ))}
    </div>
  ),
};
