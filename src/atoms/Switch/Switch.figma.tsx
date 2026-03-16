import figma from '@figma/code-connect';
import { Switch } from './Switch';

figma.connect(Switch, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:598', {
  props: {
    switchSize: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.boolean('Disabled'),
    checked: figma.boolean('Checked'),
  },
  example: (props) => <Switch {...props} />,
});
