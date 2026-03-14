import figma from '@figma/code-connect';
import { ChatWidget } from './ChatWidget';

figma.connect(ChatWidget, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_CHAT_WIDGET', {
  props: {
    title: figma.string('Title'),
  },
  example: ({ title }) => <ChatWidget messages={[]} onSend={() => {}} title={title} />,
});
