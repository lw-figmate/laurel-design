import figma from '@figma/code-connect';
import { ToggleGroup } from './ToggleGroup';

figma.connect(ToggleGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1529', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    multiple: figma.boolean('Multiple'),
  },
  example: (props) => (
    <ToggleGroup {...props}>{figma.children('ToggleGroupItem*')}</ToggleGroup>
  ),
});
