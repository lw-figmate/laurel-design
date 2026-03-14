import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

figma.connect(Avatar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_AVATAR', {
  props: {
    src: figma.string('Image URL'),
    alt: figma.string('Alt Text'),
    initials: figma.string('Initials'),
    size: figma.enum('Size', {
      'Extra Small': 'xs',
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
      'Extra Large': 'xl',
    }),
  },
  example: (props) => <Avatar {...props} />,
});
