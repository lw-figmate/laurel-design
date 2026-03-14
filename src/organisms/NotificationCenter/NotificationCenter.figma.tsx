import figma from '@figma/code-connect';
import { NotificationCenter } from './NotificationCenter';

figma.connect(NotificationCenter, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_NOTIFICATION_CENTER', {
  props: {},
  example: () => <NotificationCenter notifications={[]} />,
});
