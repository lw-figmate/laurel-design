import figma from '@figma/code-connect';
import { Slider } from './Slider';

figma.connect(Slider, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1336', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    disabled: figma.boolean('Disabled'),
    showValue: figma.boolean('Show Value'),
  },
  example: (props) => <Slider {...props} label="Slider" />,
});
