import figma from '@figma/code-connect';
import { Badge } from './Badge';

figma.connect(Badge, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_BADGE', {
  props: {
    variant: figma.enum('Variant', {
      Default: 'default',
      Primary: 'primary',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    children: figma.string('Label'),
  },
  example: (props) => <Badge {...props} />,
});
