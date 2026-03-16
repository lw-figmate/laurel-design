import figma from '@figma/code-connect';
import { DataList } from './DataList';

figma.connect(DataList, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1643', {
  props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: (props) => <DataList {...props}>{figma.children('DataListItem*')}</DataList>,
});
