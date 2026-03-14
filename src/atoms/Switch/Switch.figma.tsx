import figma from '@figma/code-connect';
import { Switch } from './Switch';

figma.connect(Switch, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_SWITCH', {
  props: {
    switchSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    disabled: figma.boolean('Disabled'),
    checked: figma.boolean('Checked'),
  },
  example: (props) => <Switch {...props} />,
});
