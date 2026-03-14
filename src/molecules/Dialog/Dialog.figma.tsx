import figma from '@figma/code-connect';
import { Dialog } from './Dialog';

figma.connect(Dialog, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_DIALOG', {
  props: {
    title: figma.string('Title'),
  },
  example: (props) => (
    <Dialog open onClose={() => {}} {...props}>
      Dialog content goes here.
    </Dialog>
  ),
});
