import figma from '@figma/code-connect';
import { ColorSwatch } from './ColorSwatch';

figma.connect(ColorSwatch, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:719', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    selected: figma.enum('Selected', { Yes: true }),
    shape: figma.enum('Shape', {
      Circle: 'circle',
      Square: 'square',
    }),
    disabled: figma.enum('Disabled', { Yes: true }),
  },
  example: (props) => <ColorSwatch color="#3b82f6" {...props} />,
});
