import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

figma.connect(Checkbox, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:518', {
  props: {
    checkboxSize: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.boolean('Disabled'),
    indeterminate: figma.enum('State', {
      Indeterminate: true,
    }),
  },
  example: (props) => <Checkbox {...props} />,
});
