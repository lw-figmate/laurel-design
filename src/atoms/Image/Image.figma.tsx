import figma from '@figma/code-connect';
import { Image } from './Image';

figma.connect(Image, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_IMAGE', {
  props: {
    fit: figma.enum('Fit', {
      Cover: 'cover',
      Contain: 'contain',
      Fill: 'fill',
      None: 'none',
    }),
    radius: figma.enum('Radius', {
      None: 'none',
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
      'Extra Large': 'xl',
      Full: 'full',
    }),
  },
  example: (props) => <Image src="image.jpg" alt="Description" {...props} />,
});
