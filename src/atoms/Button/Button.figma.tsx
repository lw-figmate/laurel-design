import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(Button, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:247', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
      Outline: 'outline',
      Ghost: 'ghost',
      Danger: 'danger',
    }),
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    children: figma.string('Label'),
  },
  example: (props) => <Button {...props} />,
});
