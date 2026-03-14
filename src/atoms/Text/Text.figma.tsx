import figma from '@figma/code-connect';
import { Text } from './Text';

figma.connect(Text, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TEXT', {
  props: {
    size: figma.enum('Size', {
      'Extra Small': 'xs',
      Small: 'sm',
      Base: 'base',
      Large: 'lg',
      'Extra Large': 'xl',
      '2XL': '2xl',
      '3XL': '3xl',
      '4XL': '4xl',
    }),
    weight: figma.enum('Weight', {
      Normal: 'normal',
      Medium: 'medium',
      Semibold: 'semibold',
      Bold: 'bold',
    }),
    truncate: figma.boolean('Truncate'),
    children: figma.string('Content'),
  },
  example: (props) => <Text {...props} />,
});
