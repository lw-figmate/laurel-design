export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom separator between items (defaults to "/") */
  separator?: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Link destination — omit for the current (active) page */
  href?: string;
  /** Whether this is the current page */
  active?: boolean;
}
