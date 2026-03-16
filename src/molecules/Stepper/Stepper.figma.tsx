import figma from '@figma/code-connect';
import { Stepper } from './Stepper';

figma.connect(Stepper, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1441', {
  props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: (props) => (
    <Stepper activeStep={1} {...props}>
      {figma.children('Step*')}
    </Stepper>
  ),
});
