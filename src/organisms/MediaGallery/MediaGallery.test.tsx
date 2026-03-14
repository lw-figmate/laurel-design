import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MediaGallery } from './MediaGallery';
import type { MediaItem } from './MediaGallery.types';

const items: MediaItem[] = [
  { id: '1', src: 'img1.jpg', alt: 'Photo 1', caption: 'Beautiful sunset' },
  { id: '2', src: 'img2.jpg', alt: 'Photo 2' },
  { id: '3', src: 'vid1.mp4', alt: 'Video 1', type: 'video' },
];

describe('MediaGallery', () => {
  it('renders all media items', () => {
    render(<MediaGallery items={items} />);
    expect(screen.getByAltText('Photo 1')).toBeInTheDocument();
    expect(screen.getByAltText('Photo 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Video 1')).toBeInTheDocument();
  });

  it('renders captions', () => {
    render(<MediaGallery items={items} />);
    expect(screen.getByText('Beautiful sunset')).toBeInTheDocument();
  });

  it('calls onItemClick when an item is clicked', () => {
    const onItemClick = vi.fn();
    render(<MediaGallery items={items} onItemClick={onItemClick} />);
    fireEvent.click(screen.getByAltText('Photo 1'));
    expect(onItemClick).toHaveBeenCalledWith(items[0]);
  });

  it('opens lightbox on click', () => {
    render(<MediaGallery items={items} />);
    fireEvent.click(screen.getByAltText('Photo 1'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders empty content when no items', () => {
    render(<MediaGallery items={[]} emptyContent={<span>No media</span>} />);
    expect(screen.getByText('No media')).toBeInTheDocument();
  });

  it('applies custom column count', () => {
    const { container } = render(<MediaGallery items={items} columns={4} />);
    const grid = container.querySelector('[class*="grid"]');
    expect(grid).toHaveStyle({ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' });
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(<MediaGallery ref={ref} items={items} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
