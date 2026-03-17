import figma from '@figma/code-connect';
import { Sidebar } from './Sidebar';

figma.connect(Sidebar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SIDEBAR', {
  props: {
    collapsed: figma.boolean('Collapsed'),
  },
  example: (props) => <Sidebar {...props}>{figma.children('SidebarItem*')}</Sidebar>,
});
