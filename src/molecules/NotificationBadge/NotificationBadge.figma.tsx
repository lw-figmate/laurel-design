import figma from '@figma/code-connect';
import { NotificationBadge } from './NotificationBadge';

figma.connect(NotificationBadge, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_NOTIFICATION_BADGE', {
  props: {
    count: figma.string('Count'),
    dot: figma.boolean('Dot'),
    variant: figma.enum('Variant', { Primary: 'primary', Error: 'error' }),
  },
  example: (props) => <NotificationBadge {...props}>{figma.children('*')}</NotificationBadge>,
});
