import figma from '@figma/code-connect';
import { Label } from './Label';

figma.connect(Label, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:341', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    required: figma.enum('State', {
      Required: true,
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    children: figma.string('Text'),
  },
  example: (props) => <Label {...props} />,
});
