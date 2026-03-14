import figma from '@figma/code-connect';
import { ColorSwatch } from './ColorSwatch';

figma.connect(ColorSwatch, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_COLOR_SWATCH', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    selected: figma.boolean('Selected'),
  },
  example: (props) => <ColorSwatch color="#3b82f6" {...props} />,
});
