import figma from '@figma/code-connect';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

figma.connect(Tabs, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1019', {
  example: () => (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
      </TabList>
      <TabPanel value="tab1">Panel 1</TabPanel>
      <TabPanel value="tab2">Panel 2</TabPanel>
    </Tabs>
  ),
});
