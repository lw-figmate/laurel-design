import figma from '@figma/code-connect';
import { Spinner } from './Spinner';

figma.connect(Spinner, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:632', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
    }),
  },
  example: (props) => <Spinner {...props} />,
});
