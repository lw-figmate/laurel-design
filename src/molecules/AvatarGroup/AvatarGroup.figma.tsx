import figma from '@figma/code-connect';
import { AvatarGroup } from './AvatarGroup';

figma.connect(AvatarGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1256', {
  props: {
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
  },
  example: (props) => <AvatarGroup {...props}>{figma.children('Avatar*')}</AvatarGroup>,
});
