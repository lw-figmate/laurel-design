import figma from '@figma/code-connect';
import { AuthPage } from './AuthPage';

figma.connect(AuthPage, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_AUTH_PAGE', {
  props: {
    variant: figma.enum('Variant', { Split: 'split', Centered: 'centered' }),
  },
  example: (props) => (
    <AuthPage {...props}>
      <div>Auth form content</div>
    </AuthPage>
  ),
});
