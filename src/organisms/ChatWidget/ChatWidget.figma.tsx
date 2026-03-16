import figma from '@figma/code-connect';
import { ChatWidget } from './ChatWidget';

figma.connect(ChatWidget, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3759', {
  props: {
    title: figma.string('Title'),
    agentName: figma.string('AgentName'),
    placeholder: figma.string('Placeholder'),
  },
  example: ({ title, agentName, placeholder }) => (
    <ChatWidget
      messages={[]}
      onSend={() => {}}
      title={title}
      agentName={agentName}
      placeholder={placeholder}
    />
  ),
});
