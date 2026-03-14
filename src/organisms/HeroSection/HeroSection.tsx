import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { HeroSectionProps } from './HeroSection.types';

const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
} as const;

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      headline,
      subtext,
      primaryAction,
      secondaryAction,
      backgroundImage,
      align = 'center',
      media,
      className = '',
      ...rest
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={[
        'relative w-full py-[var(--laurel-space-16)] px-[var(--laurel-space-6)]',
        'font-[family-name:var(--laurel-font-sans)]',
        backgroundImage ? 'text-[var(--laurel-text-on-brand)]' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(var(--laurel-bg-overlay), var(--laurel-bg-overlay)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
      {...rest}
    >
      <div
        className={[
          'mx-auto max-w-6xl flex flex-col md:flex-row gap-[var(--laurel-space-10)]',
          media ? 'items-center' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className={['flex flex-1 flex-col gap-[var(--laurel-space-4)]', alignClasses[align]].join(' ')}>
          <Text as="h1" size="4xl" weight="bold">
            {headline}
          </Text>
          {subtext && (
            <Text as="p" size="lg" className="text-[var(--laurel-text-muted)] max-w-2xl">
              {subtext}
            </Text>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-[var(--laurel-space-3)] mt-[var(--laurel-space-4)]">
              {primaryAction}
              {secondaryAction}
            </div>
          )}
        </div>

        {media && <div className="flex-1">{media}</div>}
      </div>
    </section>
  ),
);

HeroSection.displayName = 'HeroSection';

export { HeroSection };
