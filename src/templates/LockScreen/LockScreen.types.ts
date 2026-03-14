import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface LockScreenProps extends ComponentPropsWithRef<'div'> {
  /** User name */
  userName: string;
  /** User avatar element */
  avatar?: ReactNode;
  /** Called when password is submitted */
  onUnlock: (password: string) => void;
  /** Error message */
  error?: string;
  /** Whether unlock is in progress */
  loading?: boolean;
  /** Sign out link handler */
  onSignOut?: () => void;
  /** Background image URL */
  backgroundImage?: string;
  /** Current time display (default: auto) */
  showTime?: boolean;
}
