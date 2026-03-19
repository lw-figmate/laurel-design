import figma from '@figma/code-connect';
import { Divider } from './Divider';

figma.connect(Divider, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:702', {
  props: {
    orientation: figma.enum('Orientation', {
      Horizontal: 'horizontal',
      Vertical: 'vertical',
    }),
    variant: figma.enum('Style', {
      Solid: 'solid',
      Dashed: 'dashed',
      Dotted: 'dotted',
    }),
  },
  example: (props) => <Divider {...props} />,
});
