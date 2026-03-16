import figma from '@figma/code-connect';
import { Tooltip } from './Tooltip';

figma.connect(Tooltip, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:901', {
  props: {
    placement: figma.enum('Placement', {
      Top: 'top',
      Bottom: 'bottom',
      Left: 'left',
      Right: 'right',
    }),
    content: figma.string('Content'),
  },
  example: (props) => (
    <Tooltip {...props}>
      <button>Trigger</button>
    </Tooltip>
  ),
});
