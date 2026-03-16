import figma from '@figma/code-connect';
import { Input } from './Input';

figma.connect(Input, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:268', {
  props: {
    inputSize: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    error: figma.enum('State', {
      Error: true,
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <Input {...props} />,
});
