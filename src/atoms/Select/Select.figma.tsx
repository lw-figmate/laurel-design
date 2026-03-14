import figma from '@figma/code-connect';
import { Select } from './Select';

figma.connect(Select, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SELECT', {
  props: {
    selectSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    error: figma.boolean('Error'),
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => (
    <Select {...props}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  ),
});
