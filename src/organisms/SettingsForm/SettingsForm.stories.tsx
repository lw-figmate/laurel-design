import type { Meta, StoryObj } from '@storybook/react-vite';
import { SettingsForm } from './SettingsForm';
import { Switch } from '../../atoms/Switch';
import { FormField } from '../../molecules/FormField';

const meta = {
  title: 'Organisms/SettingsForm',
  component: SettingsForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SettingsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'Profile',
        description: 'Update your personal information.',
        content: (
          <div className="space-y-4">
            <FormField label="Display Name" defaultValue="Jane Doe" />
            <FormField label="Email" type="email" defaultValue="jane@example.com" />
          </div>
        ),
      },
      {
        title: 'Notifications',
        description: 'Choose what notifications you receive.',
        content: (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Email notifications</span>
              <Switch defaultChecked aria-label="Email notifications" />
            </div>
            <div className="flex items-center justify-between">
              <span>Push notifications</span>
              <Switch aria-label="Push notifications" />
            </div>
          </div>
        ),
      },
    ],
    onSubmit: (e) => {
      e.preventDefault();
      alert('Saved!');
    },
    onCancel: () => alert('Cancelled'),
  },
};
