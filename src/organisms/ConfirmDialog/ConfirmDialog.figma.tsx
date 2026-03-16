import figma from '@figma/code-connect';
import { ConfirmDialog } from './ConfirmDialog';

figma.connect(ConfirmDialog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3908', {
  props: {
    variant: figma.enum('Variant', { Primary: 'primary', Danger: 'danger' }),
    title: figma.string('Title'),
    children: figma.string('Body'),
    confirmLabel: figma.string('ConfirmLabel'),
    cancelLabel: figma.string('CancelLabel'),
    loading: figma.boolean('Loading'),
  },
  example: ({ variant, title, children, confirmLabel, cancelLabel, loading }) => (
    <ConfirmDialog
      open
      onClose={() => {}}
      onConfirm={() => {}}
      title={title}
      variant={variant}
      confirmLabel={confirmLabel}
      cancelLabel={cancelLabel}
      loading={loading}
    >
      {children}
    </ConfirmDialog>
  ),
});
