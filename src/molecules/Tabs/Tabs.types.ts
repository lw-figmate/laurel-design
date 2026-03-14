export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The value of the initially active tab (uncontrolled) */
  defaultValue?: string;
  /** The value of the active tab (controlled) */
  value?: string;
  /** Called when the active tab changes */
  onValueChange?: (value: string) => void;
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Unique value identifying this tab */
  value: string;
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The tab value this panel is associated with */
  value: string;
}
