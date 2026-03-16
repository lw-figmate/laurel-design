import figma from '@figma/code-connect';
import { NavigationMenu } from './NavigationMenu';

figma.connect(NavigationMenu, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1816', {
  props: {},
  example: () => (
    <NavigationMenu>{figma.children('NavigationMenuItem*')}</NavigationMenu>
  ),
});
