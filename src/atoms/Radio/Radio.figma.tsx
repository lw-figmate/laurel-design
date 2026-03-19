import figma from '@figma/code-connect';
import { Radio } from './Radio';

figma.connect(Radio, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:561', {
  props: {
    radioSize: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
  },
  example: (props) => <Radio {...props} />,
});
