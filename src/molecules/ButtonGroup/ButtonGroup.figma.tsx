import figma from '@figma/code-connect';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/Button';

figma.connect(ButtonGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_BUTTONGROUP', {
  props: {
    vertical: figma.boolean('Vertical'),
  },
  example: (props) => (
    <ButtonGroup {...props}>
      <Button>Action 1</Button>
      <Button variant="secondary">Action 2</Button>
    </ButtonGroup>
  ),
});
