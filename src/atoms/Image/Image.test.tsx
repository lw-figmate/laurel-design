import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Image } from './Image';

describe('Image', () => {
  it('renders an img element', () => {
    render(<Image src="/photo.jpg" alt="Photo" />);
    expect(screen.getByRole('img', { name: 'Photo' })).toBeInTheDocument();
  });

  it('sets src and alt attributes', () => {
    render(<Image src="/photo.jpg" alt="Photo" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/photo.jpg');
    expect(img).toHaveAttribute('alt', 'Photo');
  });

  it('applies cover fit by default', () => {
    render(<Image src="/photo.jpg" alt="Photo" />);
    expect(screen.getByRole('img').className).toContain('object-cover');
  });

  it('applies contain fit', () => {
    render(<Image src="/photo.jpg" alt="Photo" fit="contain" />);
    expect(screen.getByRole('img').className).toContain('object-contain');
  });

  it('applies fill fit', () => {
    render(<Image src="/photo.jpg" alt="Photo" fit="fill" />);
    expect(screen.getByRole('img').className).toContain('object-fill');
  });

  it('applies none fit', () => {
    render(<Image src="/photo.jpg" alt="Photo" fit="none" />);
    expect(screen.getByRole('img').className).toContain('object-none');
  });

  it('applies no radius by default', () => {
    render(<Image src="/photo.jpg" alt="Photo" />);
    expect(screen.getByRole('img').className).toContain('--laurel-radius-none');
  });

  it('applies md radius', () => {
    render(<Image src="/photo.jpg" alt="Photo" radius="md" />);
    expect(screen.getByRole('img').className).toContain('--laurel-radius-md');
  });

  it('applies full radius', () => {
    render(<Image src="/photo.jpg" alt="Photo" radius="full" />);
    expect(screen.getByRole('img').className).toContain('--laurel-radius-full');
  });

  it('applies aspect ratio via style', () => {
    render(<Image src="/photo.jpg" alt="Photo" aspectRatio="16/9" />);
    expect(screen.getByRole('img')).toHaveStyle({ aspectRatio: '16/9' });
  });

  it('renders fallback on error', () => {
    render(<Image src="/broken.jpg" alt="Photo" fallback={<span>No image</span>} />);
    fireEvent.error(screen.getByRole('img'));
    expect(screen.getByText('No image')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('calls onError when image fails to load', () => {
    const handleError = vi.fn();
    render(<Image src="/broken.jpg" alt="Photo" onError={handleError} />);
    fireEvent.error(screen.getByRole('img'));
    expect(handleError).toHaveBeenCalled();
  });

  it('still renders img without fallback on error', () => {
    render(<Image src="/broken.jpg" alt="Photo" />);
    fireEvent.error(screen.getByRole('img'));
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<Image src="/photo.jpg" alt="Photo" className="my-custom" />);
    expect(screen.getByRole('img').className).toContain('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLImageElement | null>;
    render(<Image ref={ref} src="/photo.jpg" alt="Photo" />);
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
  });
});
