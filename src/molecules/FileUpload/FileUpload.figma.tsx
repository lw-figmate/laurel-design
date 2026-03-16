import figma from '@figma/code-connect';
import { FileUpload } from './FileUpload';

figma.connect(FileUpload, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1693', {
  props: {
    multiple: figma.boolean('Multiple'),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <FileUpload {...props} helpText="Drag and drop or click to upload." />,
});
