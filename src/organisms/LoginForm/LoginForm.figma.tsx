import figma from '@figma/code-connect';
import { LoginForm } from './LoginForm';

figma.connect(LoginForm, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=33:4603', {
  props: {
    loading: figma.enum('Loading', { Yes: true }),
  },
  example: (props) => <LoginForm onSubmit={() => {}} {...props} />,
});
