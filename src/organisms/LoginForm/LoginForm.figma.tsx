import figma from '@figma/code-connect';
import { LoginForm } from './LoginForm';

figma.connect(LoginForm, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_LOGIN_FORM', {
  props: {
    loading: figma.boolean('Loading'),
  },
  example: (props) => <LoginForm onSubmit={() => {}} {...props} />,
});
