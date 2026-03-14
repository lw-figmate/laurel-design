import figma from '@figma/code-connect';
import { ConfirmDialog } from './ConfirmDialog';

figma.connect(ConfirmDialog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_CONFIRM_DIALOG', {
  props: {
    variant: figma.enum('Variant', { Primary: 'primary', Danger: 'danger' }),
  },
  example: (props) => (
    <ConfirmDialog open onClose={() => {}} onConfirm={() => {}} title="Confirm" {...props}>
      Are you sure?
    </ConfirmDialog>
  ),
});
