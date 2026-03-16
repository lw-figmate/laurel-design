import figma from '@figma/code-connect';
import { Alert } from './Alert';

figma.connect(Alert, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:847', {
  props: {
    variant: figma.enum('Variant', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
    title: figma.string('Title'),
  },
  example: (props) => <Alert {...props}>Alert message content.</Alert>,
});
