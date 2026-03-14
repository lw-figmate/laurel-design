import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SettingsSection {
  /** Section title */
  title: string;
  /** Section description */
  description?: string;
  /** Section content (form fields) */
  content: ReactNode;
}

export interface SettingsFormProps extends Omit<ComponentPropsWithRef<'form'>, 'onSubmit'> {
  /** Settings sections */
  sections: SettingsSection[];
  /** Called on form submit */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  /** Called on cancel */
  onCancel?: () => void;
  /** Submit button label (default: 'Save changes') */
  submitLabel?: string;
  /** Cancel button label (default: 'Cancel') */
  cancelLabel?: string;
  /** Whether the form is submitting */
  loading?: boolean;
}
