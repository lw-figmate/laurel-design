import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

figma.connect(Checkbox, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_CHECKBOX', {
  props: {
    checkboxSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    disabled: figma.boolean('Disabled'),
    indeterminate: figma.boolean('Indeterminate'),
  },
  example: (props) => <Checkbox {...props} />,
});
