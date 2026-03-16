import figma from '@figma/code-connect';
import { Toast } from './Toast';

figma.connect(Toast, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:892', {
  props: {
    variant: figma.enum('Variant', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
    message: figma.string('Message'),
  },
  example: (props) => <Toast {...props} />,
});
