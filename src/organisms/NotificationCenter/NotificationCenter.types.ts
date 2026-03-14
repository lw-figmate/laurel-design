import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface NotificationItem {
  /** Unique id */
  id: string;
  /** Notification title */
  title: string;
  /** Notification body */
  description?: string;
  /** Timestamp string */
  timestamp: string;
  /** Whether this notification is unread */
  unread?: boolean;
  /** Avatar/icon element */
  icon?: ReactNode;
}

export interface NotificationCenterProps extends ComponentPropsWithRef<'div'> {
  /** Notification items */
  notifications: NotificationItem[];
  /** Called when a notification is clicked */
  onNotificationClick?: (id: string) => void;
  /** Called when all are marked read */
  onMarkAllRead?: () => void;
  /** Trigger element (default: bell icon) */
  trigger?: ReactNode;
  /** Title text (default: 'Notifications') */
  title?: string;
  /** Empty state text */
  emptyMessage?: string;
}
