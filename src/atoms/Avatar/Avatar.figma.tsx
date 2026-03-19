import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

figma.connect(Avatar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:619', {
  props: {
    src: figma.enum('Type', {
      Image: figma.string('Image URL'),
    }),
    alt: figma.string('Alt Text'),
    initials: figma.enum('Type', {
      Initials: figma.string('Initials'),
    }),
    size: figma.enum('Size', {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
    }),
    shape: figma.enum('Shape', {
      Circle: 'circle',
      Square: 'square',
    }),
  },
  example: (props) => <Avatar {...props} />,
});
