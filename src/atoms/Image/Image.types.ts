export const IMAGE_FITS = ['cover', 'contain', 'fill', 'none'] as const;
export const IMAGE_RADII = ['none', 'sm', 'md', 'lg', 'xl', 'full'] as const;

export type ImageFit = (typeof IMAGE_FITS)[number];
export type ImageRadius = (typeof IMAGE_RADII)[number];

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Object-fit behavior */
  fit?: ImageFit;
  /** Border radius preset */
  radius?: ImageRadius;
  /** Fallback content rendered when the image fails to load */
  fallback?: React.ReactNode;
  /** Aspect ratio (e.g. "16/9", "1/1") applied via CSS */
  aspectRatio?: string;
}
