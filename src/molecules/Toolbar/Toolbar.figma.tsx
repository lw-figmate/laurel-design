import figma from '@figma/code-connect';
import { Toolbar } from './Toolbar';

figma.connect(Toolbar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1544', {
  props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: (props) => <Toolbar {...props}>{figma.children('ToolbarGroup*')}</Toolbar>,
});
