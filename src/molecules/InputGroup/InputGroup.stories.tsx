import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputGroup } from './InputGroup';
import { Input } from '../../atoms/Input';

const meta = {
  title: 'Molecules/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPrefix: Story = {
  render: () => (
    <InputGroup prefix="$">
      <Input placeholder="0.00" aria-label="Amount" />
    </InputGroup>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <InputGroup suffix=".com">
      <Input placeholder="yoursite" aria-label="Domain" />
    </InputGroup>
  ),
};

export const WithBoth: Story = {
  render: () => (
    <InputGroup prefix="https://" suffix=".com">
      <Input placeholder="example" aria-label="URL" />
    </InputGroup>
  ),
};
