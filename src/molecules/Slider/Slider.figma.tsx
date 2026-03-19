import figma from '@figma/code-connect';
import { Slider } from './Slider';

figma.connect(Slider, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1336', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    showValue: figma.boolean('Show Value'),
    label: figma.string('Label'),
  },
  example: (props) => <Slider {...props} />,
});
