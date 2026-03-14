import type { ComponentPropsWithRef } from 'react';

export interface FileUploadProps extends Omit<ComponentPropsWithRef<'div'>, 'onDrop'> {
  /** Accepted file types (e.g. "image/*,.pdf") */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Max file size in bytes */
  maxSize?: number;
  /** Called with selected files */
  onFilesSelected?: (files: File[]) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Help text / instructions */
  helpText?: string;
}
