import figma from '@figma/code-connect';
import { PinInput } from './PinInput';

figma.connect(PinInput, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PIN_INPUT', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    mask: figma.boolean('Mask'),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <PinInput {...props} />,
});
