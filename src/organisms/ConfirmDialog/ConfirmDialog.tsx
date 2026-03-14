import { Dialog } from '../../molecules/Dialog';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import type { ConfirmDialogProps } from './ConfirmDialog.types';

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'primary',
  loading = false,
}: ConfirmDialogProps) => (
  <Dialog open={open} onClose={onClose} title={title}>
    <div className="font-[family-name:var(--laurel-font-sans)]">
      <Text as="div" size="sm" className="text-[var(--laurel-text-tertiary)]">
        {children}
      </Text>
      <div className="flex justify-end gap-[var(--laurel-space-3)] mt-[var(--laurel-space-6)]">
        <Button variant="ghost" onClick={onClose} type="button" disabled={loading}>
          {cancelLabel}
        </Button>
        <Button
          onClick={onConfirm}
          type="button"
          disabled={loading}
          className={
            variant === 'danger'
              ? 'bg-[var(--laurel-bg-danger)] hover:bg-[var(--laurel-bg-danger-hover)]'
              : ''
          }
        >
          {loading ? 'Loading…' : confirmLabel}
        </Button>
      </div>
    </div>
  </Dialog>
);

ConfirmDialog.displayName = 'ConfirmDialog';

export { ConfirmDialog };
