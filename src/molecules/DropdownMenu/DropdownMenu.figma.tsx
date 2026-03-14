import figma from '@figma/code-connect';
import { DropdownMenu } from './DropdownMenu';

figma.connect(DropdownMenu, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_DROPDOWN_MENU', {
  props: {
    align: figma.enum('Align', { Start: 'start', End: 'end' }),
  },
  example: (props) => (
    <DropdownMenu trigger={<button>Open</button>} {...props}>
      {figma.children('DropdownMenuItem*')}
    </DropdownMenu>
  ),
});
