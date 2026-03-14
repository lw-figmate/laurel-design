import figma from '@figma/code-connect';
import { Icon } from './Icon';

figma.connect(Icon, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_ICON', {
  props: {
    size: figma.enum('Size', {
      'Extra Small': 'xs',
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
      'Extra Large': 'xl',
    }),
    label: figma.string('Label'),
  },
  example: (props) => (
    <Icon {...props}>
      <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
    </Icon>
  ),
});
