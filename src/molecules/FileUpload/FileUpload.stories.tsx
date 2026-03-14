import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from './FileUpload';

const meta = {
  title: 'Molecules/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { helpText: 'Drag and drop files here, or click to browse.' },
};

export const ImagesOnly: Story = {
  args: { accept: 'image/*', helpText: 'Only image files are accepted.' },
};

export const Multiple: Story = {
  args: { multiple: true, helpText: 'Upload multiple files at once.' },
};

export const WithMaxSize: Story = {
  args: { maxSize: 5 * 1024 * 1024, helpText: 'Max file size: 5MB.' },
};

export const Disabled: Story = {
  args: { disabled: true, helpText: 'Upload is currently disabled.' },
};
