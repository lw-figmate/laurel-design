import figma from '@figma/code-connect';
import { ListItem } from './ListItem';

figma.connect(ListItem, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1288', {
  props: {
    primary: figma.string('Primary'),
    secondary: figma.string('Secondary'),
    interactive: figma.boolean('Interactive'),
    selected: figma.boolean('Selected'),
  },
  example: (props) => <ListItem {...props} />,
});
