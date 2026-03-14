import figma from '@figma/code-connect';
import { Spinner } from './Spinner';

figma.connect(Spinner, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SPINNER', {
  props: {
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
      'Extra Large': 'xl',
    }),
  },
  example: (props) => <Spinner {...props} />,
});
