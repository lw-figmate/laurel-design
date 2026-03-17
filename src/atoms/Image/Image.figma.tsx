import figma from '@figma/code-connect';
import { Image } from './Image';

figma.connect(Image, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:728', {
  props: {
    radius: figma.enum('Radius', {
      none: 'none',
      sm: 'sm',
      lg: 'lg',
      full: 'full',
    }),
    fit: figma.string('Fit'),
    aspectRatio: figma.string('Aspect Ratio'),
  },
  example: (props) => <Image src="image.jpg" alt="Description" {...props} />,
});
