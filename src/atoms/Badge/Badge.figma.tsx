import figma from '@figma/code-connect';
import { Badge } from './Badge';

figma.connect(Badge, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:378', {
  props: {
    variant: figma.enum('Variant', {
      Default: 'default',
      Neutral: 'neutral',
      Primary: 'primary',
      Success: 'success',
      Warning: 'warning',
      Error: 'error',
    }),
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    badgeStyle: figma.enum('Style', {
      Subtle: 'subtle',
      Solid: 'solid',
      Outline: 'outline',
    }),
    children: figma.string('Label'),
  },
  example: (props) => <Badge {...props} />,
});
