export const CODE_SIZES = ['sm', 'md', 'lg'] as const;

export type CodeSize = (typeof CODE_SIZES)[number];

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Font size */
  size?: CodeSize;
  /** Render as inline <code> or block <pre><code> */
  block?: boolean;
}
