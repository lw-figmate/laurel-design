import figma from '@figma/code-connect';
import { Rating } from './Rating';

figma.connect(Rating, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1355', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    readonly: figma.boolean('Readonly'),
  },
  example: (props) => <Rating {...props} />,
});
