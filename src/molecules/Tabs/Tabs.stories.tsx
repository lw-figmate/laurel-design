import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within, expect } from 'storybook/test';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';
import { Text } from '../../atoms/Text';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabbed interface for switching between panels of content. Supports controlled and uncontrolled modes with proper ARIA tab roles.',
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', { name: 'Features' }));
    await expect(canvas.getByText('Features content goes here.')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', { name: 'Pricing' }));
    await expect(canvas.getByText('Pricing content goes here.')).toBeInTheDocument();
  },
  render: () => (
    <Tabs defaultValue="overview">
      <TabList>
        <Tab value="overview">Overview</Tab>
        <Tab value="features">Features</Tab>
        <Tab value="pricing">Pricing</Tab>
      </TabList>
      <TabPanel value="overview"><Text>Overview content goes here.</Text></TabPanel>
      <TabPanel value="features"><Text>Features content goes here.</Text></TabPanel>
      <TabPanel value="pricing"><Text>Pricing content goes here.</Text></TabPanel>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
        <TabPanel value="tab1"><Text>Panel 1</Text></TabPanel>
        <TabPanel value="tab2"><Text>Panel 2</Text></TabPanel>
        <TabPanel value="tab3"><Text>Panel 3</Text></TabPanel>
      </Tabs>
    );
  },
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="active">
      <TabList>
        <Tab value="active">Active</Tab>
        <Tab value="disabled" disabled>Disabled</Tab>
        <Tab value="another">Another</Tab>
      </TabList>
      <TabPanel value="active"><Text>Active tab content.</Text></TabPanel>
      <TabPanel value="disabled"><Text>You can't get here.</Text></TabPanel>
      <TabPanel value="another"><Text>Another tab content.</Text></TabPanel>
    </Tabs>
  ),
};
