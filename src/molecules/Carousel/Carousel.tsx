import { forwardRef, useState, useRef, useEffect, useCallback, Children } from 'react';
import type { CarouselProps } from './Carousel.types';

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({
    children,
    autoPlay = false,
    interval = 5000,
    showDots = true,
    showArrows = true,
    className = '',
    ...rest
  }, ref) => {
    const slides = Children.toArray(children);
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const total = slides.length;

    const goTo = useCallback((index: number) => {
      setCurrent(((index % total) + total) % total);
    }, [total]);

    useEffect(() => {
      if (!autoPlay || total <= 1) return;
      timerRef.current = setInterval(() => goTo(current + 1), interval);
      return () => clearInterval(timerRef.current);
    }, [autoPlay, interval, current, total, goTo]);

    return (
      <div
        ref={ref}
        className={['relative overflow-hidden', className].filter(Boolean).join(' ')}
        role="region"
        aria-label="Carousel"
        aria-roledescription="carousel"
        {...rest}
      >
        <div
          className="flex transition-transform duration-[var(--laurel-duration-slow)] ease-[var(--laurel-ease-in-out)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${total}`}
            >
              {slide}
            </div>
          ))}
        </div>

        {showArrows && total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(current - 1)}
              className={[
                'absolute left-[var(--laurel-space-2)] top-1/2 -translate-y-1/2',
                'h-8 w-8 rounded-[var(--laurel-radius-full)]',
                'bg-[var(--laurel-bg-surface)]/80 border border-[var(--laurel-border-subtle)]',
                'flex items-center justify-center',
                'hover:bg-[var(--laurel-bg-surface)] cursor-pointer shadow transition-colors',
              ].join(' ')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(current + 1)}
              className={[
                'absolute right-[var(--laurel-space-2)] top-1/2 -translate-y-1/2',
                'h-8 w-8 rounded-[var(--laurel-radius-full)]',
                'bg-[var(--laurel-bg-surface)]/80 border border-[var(--laurel-border-subtle)]',
                'flex items-center justify-center',
                'hover:bg-[var(--laurel-bg-surface)] cursor-pointer shadow transition-colors',
              ].join(' ')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}

        {showDots && total > 1 && (
          <div className="absolute bottom-[var(--laurel-space-2)] left-1/2 -translate-x-1/2 flex gap-[var(--laurel-space-1)]">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={[
                  'h-2 w-2 rounded-[var(--laurel-radius-full)] transition-colors cursor-pointer',
                  i === current
                    ? 'bg-[var(--laurel-bg-brand)]'
                    : 'bg-[var(--laurel-bg-control)] hover:bg-[var(--laurel-bg-control-hover)]',
                ].join(' ')}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

Carousel.displayName = 'Carousel';

export { Carousel };
