import { forwardRef, useState } from 'react';
import { Text } from '../../atoms/Text';
import { Dialog } from '../../molecules/Dialog';
import type { MediaGalleryProps, MediaItem } from './MediaGallery.types';

const MediaGallery = forwardRef<HTMLDivElement, MediaGalleryProps>(
  ({ items, columns = 3, onItemClick, emptyContent, className = '', ...rest }, ref) => {
    const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

    const handleClick = (item: MediaItem) => {
      onItemClick?.(item);
      setLightboxItem(item);
    };

    if (items.length === 0 && emptyContent) {
      return (
        <div ref={ref} className={className} {...rest}>
          {emptyContent}
        </div>
      );
    }

    return (
      <div ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        <div
          className="grid gap-[var(--laurel-space-4)]"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item)}
              className="group relative overflow-hidden rounded-[var(--laurel-radius-lg)] bg-[var(--laurel-bg-subtle)] cursor-pointer border-0 p-0"
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  muted
                  aria-label={item.alt}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                />
              )}
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-[var(--laurel-space-3)]">
                  <Text as="span" size="xs" className="text-[var(--laurel-text-on-brand)]">
                    {item.caption}
                  </Text>
                </div>
              )}
            </button>
          ))}
        </div>

        <Dialog
          open={!!lightboxItem}
          onClose={() => setLightboxItem(null)}
          title={lightboxItem?.alt}
          className="max-w-4xl"
        >
          {lightboxItem && (
            <div>
              {lightboxItem.type === 'video' ? (
                <video src={lightboxItem.src} controls className="w-full rounded-[var(--laurel-radius-md)]" aria-label={lightboxItem.alt} />
              ) : (
                <img src={lightboxItem.src} alt={lightboxItem.alt} className="w-full rounded-[var(--laurel-radius-md)]" />
              )}
              {lightboxItem.caption && (
                <Text as="p" size="sm" className="mt-[var(--laurel-space-3)] text-[var(--laurel-text-muted)]">
                  {lightboxItem.caption}
                </Text>
              )}
            </div>
          )}
        </Dialog>
      </div>
    );
  },
);

MediaGallery.displayName = 'MediaGallery';

export { MediaGallery };
