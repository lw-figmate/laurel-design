import figma from '@figma/code-connect';
import { Combobox } from './Combobox';

figma.connect(Combobox, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_COMBOBOX', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => (
    <Combobox
      {...props}
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
    />
  ),
});
