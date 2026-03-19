import figma from '@figma/code-connect';
import { ChatWidget } from './ChatWidget';

figma.connect(ChatWidget, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3759', {
  props: {},
  example: () => (
    <ChatWidget
      messages={[]}
      onSend={() => {}}
    />
  ),
});
