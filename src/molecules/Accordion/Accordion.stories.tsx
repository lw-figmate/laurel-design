import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem } from './Accordion';

const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-lg"><Story /></div>],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="1" title="What is a design system?">
        A design system is a collection of reusable components and guidelines.
      </AccordionItem>
      <AccordionItem value="2" title="Why use one?">
        It ensures consistency across products and speeds up development.
      </AccordionItem>
      <AccordionItem value="3" title="How do I get started?">
        Start by defining your design tokens and building atomic components.
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple defaultValue={['1']}>
      <AccordionItem value="1" title="Section A">Content for section A.</AccordionItem>
      <AccordionItem value="2" title="Section B">Content for section B.</AccordionItem>
      <AccordionItem value="3" title="Section C">Content for section C.</AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="1" title="Enabled item">This item can be toggled.</AccordionItem>
      <AccordionItem value="2" title="Disabled item" disabled>This item cannot be toggled.</AccordionItem>
    </Accordion>
  ),
};
