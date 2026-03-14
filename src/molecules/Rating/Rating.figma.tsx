import figma from '@figma/code-connect';
import { Rating } from './Rating';

figma.connect(Rating, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_RATING', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    readonly: figma.boolean('Readonly'),
  },
  example: (props) => <Rating {...props} />,
});
