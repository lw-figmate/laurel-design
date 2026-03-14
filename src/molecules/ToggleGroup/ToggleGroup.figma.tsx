import figma from '@figma/code-connect';
import { ToggleGroup } from './ToggleGroup';

figma.connect(ToggleGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TOGGLE_GROUP', {
  props: {
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
    multiple: figma.boolean('Multiple'),
  },
  example: (props) => (
    <ToggleGroup {...props}>{figma.children('ToggleGroupItem*')}</ToggleGroup>
  ),
});
