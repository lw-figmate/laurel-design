import { forwardRef, useMemo } from 'react';
import type { PaginationProps } from './Pagination.types';

function getPageRange(currentPage: number, totalPages: number, siblingCount: number): (number | 'ellipsis')[] {
  const totalNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 ellipsis slots

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis' as const, totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblingCount;
    const rightRange = Array.from({ length: rightCount }, (_, i) => totalPages - rightCount + i + 1);
    return [1, 'ellipsis' as const, ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i,
  );
  return [1, 'ellipsis' as const, ...middleRange, 'ellipsis' as const, totalPages];
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ totalPages, currentPage, onPageChange, siblingCount = 1, className = '', ...rest }, ref) => {
    const pages = useMemo(
      () => getPageRange(currentPage, totalPages, siblingCount),
      [currentPage, totalPages, siblingCount],
    );

    const btnBase =
      'inline-flex items-center justify-center h-8 min-w-8 px-[var(--laurel-space-2)] rounded-[var(--laurel-radius-md)] text-[length:var(--laurel-font-size-sm)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--laurel-ring-brand)]';

    return (
      <nav ref={ref} aria-label="Pagination" className={className} {...rest}>
        <ul className="flex items-center gap-[var(--laurel-space-1)] font-[family-name:var(--laurel-font-sans)]">
          <li>
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => onPageChange(currentPage - 1)}
              aria-label="Previous page"
              className={[btnBase, 'disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--laurel-bg-subtle)]'].join(' ')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
          </li>

          {pages.map((page, i) =>
            page === 'ellipsis' ? (
              <li key={`ellipsis-${i}`}>
                <span className="inline-flex items-center justify-center h-8 min-w-8 text-[var(--laurel-text-placeholder)] select-none">
                  …
                </span>
              </li>
            ) : (
              <li key={page}>
                <button
                  type="button"
                  onClick={() => onPageChange(page)}
                  aria-label={`Page ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                  className={[
                    btnBase,
                    page === currentPage
                      ? 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]'
                      : 'hover:bg-[var(--laurel-bg-subtle)] text-[var(--laurel-text-secondary)]',
                  ].join(' ')}
                >
                  {page}
                </button>
              </li>
            ),
          )}

          <li>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              aria-label="Next page"
              className={[btnBase, 'disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--laurel-bg-subtle)]'].join(' ')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export { Pagination };
