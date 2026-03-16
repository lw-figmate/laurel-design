import figma from '@figma/code-connect';
import { Drawer } from './Drawer';

figma.connect(Drawer, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1052', {
  props: {
    placement: figma.enum('Placement', { Left: 'left', Right: 'right' }),
    title: figma.string('Title'),
  },
  example: (props) => (
    <Drawer open onClose={() => {}} {...props}>
      Drawer content.
    </Drawer>
  ),
});
