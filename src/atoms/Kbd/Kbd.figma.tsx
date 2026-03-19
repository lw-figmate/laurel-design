import figma from '@figma/code-connect';
import { Kbd } from './Kbd';

figma.connect(Kbd, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:703', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    variant: figma.enum('Variant', {
      Subtle: 'subtle',
      Outline: 'outline',
      Plain: 'plain',
    }),
    children: figma.string('Key'),
  },
  example: (props) => <Kbd {...props} />,
});
