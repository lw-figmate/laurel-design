import figma from '@figma/code-connect';
import { Popover } from './Popover';

figma.connect(Popover, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_POPOVER', {
  props: {
    placement: figma.enum('Placement', {
      Top: 'top',
      Bottom: 'bottom',
      Left: 'left',
      Right: 'right',
    }),
  },
  example: (props) => (
    <Popover trigger={<button>Open</button>} {...props}>
      Popover content
    </Popover>
  ),
});
