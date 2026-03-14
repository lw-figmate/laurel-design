import figma from '@figma/code-connect';
import { SearchField } from './SearchField';

figma.connect(SearchField, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SEARCHFIELD', {
  props: {
    inputSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <SearchField {...props} />,
});
