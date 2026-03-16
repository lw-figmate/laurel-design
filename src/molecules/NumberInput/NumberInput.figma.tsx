import figma from '@figma/code-connect';
import { NumberInput } from './NumberInput';

figma.connect(NumberInput, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1614', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <NumberInput label="Quantity" {...props} />,
});
