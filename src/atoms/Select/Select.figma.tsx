import figma from '@figma/code-connect';
import { Select } from './Select';

figma.connect(Select, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:680', {
  props: {
    selectSize: figma.enum('Size', {
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
  example: (props) => (
    <Select {...props}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  ),
});
