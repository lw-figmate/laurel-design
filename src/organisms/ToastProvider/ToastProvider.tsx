import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from '../../molecules/Toast';
import type { ToastItem, ToastContextValue, ToastProviderProps } from './ToastProvider.types';

const ToastContext = createContext<ToastContextValue | null>(null);

function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

const positionClasses: Record<string, string> = {
  'top-right': 'top-[var(--laurel-space-4)] right-[var(--laurel-space-4)]',
  'top-left': 'top-[var(--laurel-space-4)] left-[var(--laurel-space-4)]',
  'bottom-right': 'bottom-[var(--laurel-space-4)] right-[var(--laurel-space-4)]',
  'bottom-left': 'bottom-[var(--laurel-space-4)] left-[var(--laurel-space-4)]',
};

let idCounter = 0;

function ToastProvider({ children, maxToasts = 5, position = 'bottom-right' }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const addToast = useCallback(
    (toast: Omit<ToastItem, 'id'>) => {
      const id = `toast-${++idCounter}`;
      setToasts((prev) => [...prev.slice(-(maxToasts - 1)), { ...toast, id }]);
      const duration = toast.duration ?? 5000;
      if (duration > 0) {
        const timer = setTimeout(() => removeToast(id), duration);
        timersRef.current.set(id, timer);
      }
      return id;
    },
    [maxToasts, removeToast],
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {createPortal(
        <div
          className={[
            'fixed z-50 flex flex-col gap-[var(--laurel-space-2)]',
            'w-[360px] max-w-[calc(100vw-2rem)]',
            positionClasses[position],
          ].join(' ')}
          aria-live="polite"
          aria-label="Notifications"
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              message={toast.message}
              action={toast.action}
              onDismiss={() => removeToast(toast.id)}
            />
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
}

ToastProvider.displayName = 'ToastProvider';

export { ToastProvider, useToast };
