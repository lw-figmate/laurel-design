import figma from '@figma/code-connect';
import { Icon } from './Icon';

figma.connect(Icon, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:643', {
  props: {
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
    }),
    label: figma.string('Label'),
  },
  example: (props) => (
    <Icon {...props}>
      <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
    </Icon>
  ),
});
