import figma from '@figma/code-connect';
import { SearchField } from './SearchField';

figma.connect(SearchField, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1622', {
  props: {
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <SearchField {...props} />,
});
