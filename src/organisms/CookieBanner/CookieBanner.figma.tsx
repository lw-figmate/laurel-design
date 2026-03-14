import figma from '@figma/code-connect';
import { CookieBanner } from './CookieBanner';

figma.connect(CookieBanner, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_COOKIE_BANNER', {
  props: {
    position: figma.enum('Position', { Top: 'top', Bottom: 'bottom' }),
  },
  example: ({ position }) => <CookieBanner onAccept={() => {}} position={position} />,
});
