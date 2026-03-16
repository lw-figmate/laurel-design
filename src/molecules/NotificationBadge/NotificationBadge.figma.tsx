import figma from '@figma/code-connect';
import { NotificationBadge } from './NotificationBadge';

figma.connect(NotificationBadge, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:933', {
  props: {
    dot: figma.enum('Mode', {
      Dot: true,
    }),
    variant: figma.enum('Variant', { Primary: 'primary', Error: 'error' }),
  },
  example: (props) => <NotificationBadge {...props}>{figma.children('*')}</NotificationBadge>,
});
