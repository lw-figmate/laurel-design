import figma from '@figma/code-connect';
import { Tag } from './Tag';

figma.connect(Tag, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TAG', {
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
  example: (props) => <Tag {...props} />,
});
