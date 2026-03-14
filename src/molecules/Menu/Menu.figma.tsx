import figma from '@figma/code-connect';
import { Menu, MenuItem } from './Menu';

figma.connect(Menu, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_MENU', {
  example: () => (
    <Menu>
      <MenuItem>Action 1</MenuItem>
      <MenuItem>Action 2</MenuItem>
    </Menu>
  ),
});
