import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Divider } from '../../atoms/Divider';
import { Badge } from '../../atoms/Badge';
import type { BlogPostProps } from './BlogPost.types';

const BlogPost = forwardRef<HTMLElement, BlogPostProps>(
  (
    {
      title,
      author,
      authorAvatar,
      date,
      readingTime,
      coverImage,
      coverImageAlt,
      children,
      tags,
      relatedPosts,
      shareActions,
      backHref,
      className = '',
      ...rest
    },
    ref,
  ) => (
    <article
      ref={ref}
      className={[
        'max-w-3xl mx-auto px-[var(--laurel-space-6)] py-[var(--laurel-space-8)]',
        'font-[family-name:var(--laurel-font-sans)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {backHref && (
        <a
          href={backHref}
          className="inline-flex items-center gap-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-brand)] hover:underline mb-[var(--laurel-space-6)]"
        >
          &larr; Back
        </a>
      )}

      <header className="mb-[var(--laurel-space-8)]">
        <Text as="h1" size="2xl" weight="bold" className="mb-[var(--laurel-space-4)]">
          {title}
        </Text>

        <div className="flex items-center gap-[var(--laurel-space-3)]">
          {authorAvatar}
          <div>
            <Text as="p" size="sm" weight="medium">
              {author}
            </Text>
            <Text as="p" size="xs" className="text-[var(--laurel-text-muted)]">
              {date}
              {readingTime && <> &middot; {readingTime}</>}
            </Text>
          </div>
        </div>
      </header>

      {coverImage && (
        <img
          src={coverImage}
          alt={coverImageAlt ?? ''}
          className="w-full rounded-[var(--laurel-radius-lg)] mb-[var(--laurel-space-8)] object-cover"
        />
      )}

      <div className="prose">{children}</div>

      {tags && tags.length > 0 && (
        <>
          <Divider className="my-[var(--laurel-space-6)]" />
          <div className="flex flex-wrap gap-[var(--laurel-space-2)]">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </>
      )}

      {shareActions && (
        <>
          <Divider className="my-[var(--laurel-space-6)]" />
          <div className="flex items-center gap-[var(--laurel-space-3)]">{shareActions}</div>
        </>
      )}

      {relatedPosts && (
        <>
          <Divider className="my-[var(--laurel-space-8)]" />
          <section aria-label="Related posts">
            <Text as="h2" size="lg" weight="semibold" className="mb-[var(--laurel-space-4)]">
              Related Posts
            </Text>
            {relatedPosts}
          </section>
        </>
      )}
    </article>
  ),
);

BlogPost.displayName = 'BlogPost';

export { BlogPost };
