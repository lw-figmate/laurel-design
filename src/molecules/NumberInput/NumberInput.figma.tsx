import figma from '@figma/code-connect';
import { NumberInput } from './NumberInput';

figma.connect(NumberInput, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_NUMBER_INPUT', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <NumberInput label="Quantity" {...props} />,
});
