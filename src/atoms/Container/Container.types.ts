export const CONTAINER_SIZES = ['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;

export type ContainerSize = (typeof CONTAINER_SIZES)[number];

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum width of the container */
  size?: ContainerSize;
  /** Center the container horizontally */
  center?: boolean;
  /** Add horizontal padding */
  padding?: boolean;
}
