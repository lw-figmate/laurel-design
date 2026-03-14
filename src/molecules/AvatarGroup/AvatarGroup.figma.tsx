import figma from '@figma/code-connect';
import { AvatarGroup } from './AvatarGroup';

figma.connect(AvatarGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_AVATAR_GROUP', {
  props: {
    max: figma.enum('Max', { '3': 3, '5': 5 }),
    size: figma.enum('Size', { SM: 'sm', MD: 'md', LG: 'lg' }),
  },
  example: (props) => <AvatarGroup {...props}>{figma.children('Avatar*')}</AvatarGroup>,
});
