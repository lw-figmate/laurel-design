import figma from '@figma/code-connect';
import { ProgressBar } from './ProgressBar';

figma.connect(ProgressBar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1221', {
  props: {
    value: figma.string('Value'),
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
    showValue: figma.boolean('Show Value'),
  },
  example: (props) => <ProgressBar {...props} label="Progress" />,
});
