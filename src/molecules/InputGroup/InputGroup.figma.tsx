import figma from '@figma/code-connect';
import { InputGroup } from './InputGroup';

figma.connect(InputGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1592', {
  props: {
    prefix: figma.string('Prefix'),
    suffix: figma.string('Suffix'),
  },
  example: (props) => (
    <InputGroup {...props}>
      <input />
    </InputGroup>
  ),
});
