import figma from '@figma/code-connect';
import { ProfileTemplate } from './ProfileTemplate';

figma.connect(ProfileTemplate, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PROFILE_TEMPLATE', {
  props: {},
  example: () => (
    <ProfileTemplate name="User">
      <div>Profile content</div>
    </ProfileTemplate>
  ),
});
