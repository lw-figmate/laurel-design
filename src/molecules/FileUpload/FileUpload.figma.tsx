import figma from '@figma/code-connect';
import { FileUpload } from './FileUpload';

figma.connect(FileUpload, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1693', {
  props: {
    disabled: figma.enum('State', { Disabled: true }),
    error: figma.enum('State', { Error: true }),
    helpText: figma.string('Help Text'),
  },
  example: (props) => <FileUpload {...props} />,
});
