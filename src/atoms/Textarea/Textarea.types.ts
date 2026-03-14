export const TEXTAREA_SIZES = ['sm', 'md', 'lg'] as const;

export type TextareaSize = (typeof TEXTAREA_SIZES)[number];

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Visual size of the textarea */
  textareaSize?: TextareaSize;
  /** Show error styling */
  error?: boolean;
  /** Whether the textarea is resizable */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
