import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { SettingsSection } from '../../organisms/SettingsForm';

export interface SettingsTemplateProps extends ComponentPropsWithRef<'div'> {
  /** Page title */
  title?: string;
  /** Settings sections */
  sections: SettingsSection[];
  /** Called when the form is submitted */
  onSave: (values: Record<string, string>) => void;
  /** Whether save is in progress */
  saving?: boolean;
  /** Navigation items for settings sidebar */
  navItems?: Array<{ label: string; id: string; icon?: ReactNode }>;
  /** Breadcrumb items */
  breadcrumbs?: Array<{ label: string; href?: string }>;
}
