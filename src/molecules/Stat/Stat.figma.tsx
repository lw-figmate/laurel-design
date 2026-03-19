import figma from '@figma/code-connect';
import { Stat } from './Stat';

figma.connect(Stat, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1457', {
  props: {
    label: figma.string('Label'),
    value: figma.string('Value'),
    trend: figma.enum('Trend', { Up: 'up', Down: 'down', None: 'none' }),
  },
  example: (props) => <Stat {...props} />,
});
