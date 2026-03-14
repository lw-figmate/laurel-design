import figma from '@figma/code-connect';
import { Input } from './Input';

figma.connect(Input, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_INPUT', {
  props: {
    inputSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    error: figma.boolean('Error'),
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <Input {...props} />,
});
