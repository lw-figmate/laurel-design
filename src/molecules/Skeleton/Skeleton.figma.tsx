import figma from '@figma/code-connect';
import { Skeleton } from './Skeleton';

figma.connect(Skeleton, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SKELETON', {
  props: {
    variant: figma.enum('Variant', { Rect: 'rect', Circle: 'circle', Text: 'text' }),
  },
  example: (props) => <Skeleton {...props} />,
});
