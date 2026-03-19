import figma from '@figma/code-connect';
import { ConfirmDialog } from './ConfirmDialog';

figma.connect(ConfirmDialog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3908', {
  props: {
    variant: figma.enum('Variant', { Primary: 'primary', Danger: 'danger' }),
  },
  example: ({ variant }) => (
    <ConfirmDialog
      open
      onClose={() => {}}
      onConfirm={() => {}}
      title="Confirm"
      variant={variant}
    >
      Are you sure?
    </ConfirmDialog>
  ),
});
