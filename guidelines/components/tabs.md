### Tabs

**Purpose**: Organize content into panels accessed via tab buttons.

**Import**: `import { Tabs, TabList, Tab, TabPanel } from '@anthropic/laurel-design'`

**Props**:
- `Tabs`: `defaultValue` (uncontrolled), `value`/`onValueChange` (controlled)
- `Tab`: `value` — String identifier (required)
- `TabPanel`: `value` — String matching a Tab value (required)

**Example**:
```tsx
<Tabs defaultValue="overview">
  <TabList>
    <Tab value="overview">Overview</Tab>
    <Tab value="settings">Settings</Tab>
    <Tab value="billing">Billing</Tab>
  </TabList>
  <TabPanel value="overview">Overview content</TabPanel>
  <TabPanel value="settings">Settings content</TabPanel>
  <TabPanel value="billing">Billing content</TabPanel>
</Tabs>
```
