import figma from '@figma/code-connect';
import { Text } from './Text';

figma.connect(Text, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:333', {
  props: {
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      base: 'base',
      lg: 'lg',
      xl: 'xl',
      '2xl': '2xl',
      '3xl': '3xl',
      '4xl': '5xl',
    }),
    weight: figma.enum('Weight', {
      Normal: 'normal',
      Medium: 'medium',
      SemiBold: 'semibold',
      Bold: 'bold',
    }),
    children: figma.string('Content'),
  },
  example: (props) => <Text {...props} />,
});
