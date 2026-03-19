import figma from '@figma/code-connect';
import { Switch } from './Switch';

figma.connect(Switch, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:598', {
  props: {
    switchSize: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    error: figma.enum('State', {
      Error: true,
    }),
    checked: figma.enum('Checked', {
      On: true,
    }),
  },
  example: (props) => <Switch {...props} />,
});
