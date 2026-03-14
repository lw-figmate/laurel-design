export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading content (icon, avatar, etc.) */
  leading?: React.ReactNode;
  /** Trailing content (action button, badge, etc.) */
  trailing?: React.ReactNode;
  /** Primary text */
  primary: string;
  /** Secondary/supporting text */
  secondary?: string;
  /** Whether the item is interactive */
  interactive?: boolean;
  /** Whether the item is selected */
  selected?: boolean;
}
