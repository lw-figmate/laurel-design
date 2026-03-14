import figma from '@figma/code-connect';
import { ProgressBar } from './ProgressBar';

figma.connect(ProgressBar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PROGRESS_BAR', {
  props: {
    value: figma.string('Value'),
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
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
