import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterPanel } from './FilterPanel';
import { Checkbox } from '../../atoms/Checkbox';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Organisms/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
} satisfies Meta<typeof FilterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClear: () => alert('Cleared'),
    sections: [
      {
        title: 'Category',
        content: (
          <div className="space-y-2">
            <label className="flex items-center gap-2"><Checkbox /><Text as="span" size="sm">Electronics</Text></label>
            <label className="flex items-center gap-2"><Checkbox /><Text as="span" size="sm">Clothing</Text></label>
            <label className="flex items-center gap-2"><Checkbox /><Text as="span" size="sm">Books</Text></label>
          </div>
        ),
      },
      {
        title: 'Price Range',
        content: <Text as="p" size="sm">Slider placeholder</Text>,
      },
      {
        title: 'Brand',
        defaultOpen: false,
        content: <Text as="p" size="sm">Brand options</Text>,
      },
    ],
  },
};
