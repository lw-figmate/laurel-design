import type { ReactNode } from 'react';
import type { ToastVariant } from '../../molecules/Toast/Toast.types';

export interface ToastItem {
  /** Unique toast id */
  id: string;
  /** Toast variant */
  variant?: ToastVariant;
  /** Toast message */
  message: string;
  /** Auto-dismiss duration in ms (default: 5000, 0 = no auto-dismiss) */
  duration?: number;
  /** Optional action */
  action?: { label: string; onClick: () => void };
}

export interface ToastContextValue {
  /** Add a toast to the queue */
  addToast: (toast: Omit<ToastItem, 'id'>) => string;
  /** Remove a toast by id */
  removeToast: (id: string) => void;
}

export interface ToastProviderProps {
  /** Application content */
  children: ReactNode;
  /** Maximum visible toasts (default: 5) */
  maxToasts?: number;
  /** Position on screen */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
