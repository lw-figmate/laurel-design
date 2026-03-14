export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Total number of pages */
  totalPages: number;
  /** Current active page (1-based) */
  currentPage: number;
  /** Called when the page changes */
  onPageChange: (page: number) => void;
  /** Number of siblings on each side of the current page (default: 1) */
  siblingCount?: number;
}
