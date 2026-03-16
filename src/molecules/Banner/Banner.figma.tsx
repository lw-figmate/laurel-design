import figma from '@figma/code-connect';
import { Banner } from './Banner';

figma.connect(Banner, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:875', {
  props: {
    variant: figma.enum('Variant', {
      Info: 'info',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
  },
  example: (props) => <Banner {...props}>Banner message content.</Banner>,
});
