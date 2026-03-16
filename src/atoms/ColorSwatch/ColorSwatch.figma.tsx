import figma from '@figma/code-connect';
import { ColorSwatch } from './ColorSwatch';

figma.connect(ColorSwatch, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:719', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    selected: figma.boolean('Selected'),
  },
  example: (props) => <ColorSwatch color="#3b82f6" {...props} />,
});
