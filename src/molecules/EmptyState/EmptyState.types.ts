export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon or illustration rendered above the title */
  icon?: React.ReactNode;
  /** Primary heading */
  title: string;
  /** Supporting text below the title */
  description?: string;
  /** Action element (typically a Button) */
  action?: React.ReactNode;
}
