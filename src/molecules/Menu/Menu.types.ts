export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface MenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Disable the menu item */
  disabled?: boolean;
}
