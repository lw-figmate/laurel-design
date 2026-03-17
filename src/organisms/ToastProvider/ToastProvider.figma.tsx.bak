import figma from '@figma/code-connect';
import { ToastProvider } from './ToastProvider';

figma.connect(ToastProvider, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TOAST_PROVIDER', {
  props: {
    position: figma.enum('Position', {
      'Top Right': 'top-right',
      'Top Left': 'top-left',
      'Bottom Right': 'bottom-right',
      'Bottom Left': 'bottom-left',
    }),
  },
  example: (props) => <ToastProvider {...props}>{figma.children('*')}</ToastProvider>,
});
