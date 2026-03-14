import figma from '@figma/code-connect';
import { Slider } from './Slider';

figma.connect(Slider, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SLIDER', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    disabled: figma.boolean('Disabled'),
    showValue: figma.boolean('Show Value'),
  },
  example: (props) => <Slider {...props} label="Slider" />,
});
