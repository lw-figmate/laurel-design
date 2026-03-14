import figma from '@figma/code-connect';
import { Divider } from './Divider';

figma.connect(Divider, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_DIVIDER', {
  props: {
    orientation: figma.enum('Orientation', {
      Horizontal: 'horizontal',
      Vertical: 'vertical',
    }),
  },
  example: (props) => <Divider {...props} />,
});
