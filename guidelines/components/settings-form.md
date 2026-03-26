### SettingsForm

**Import**: `import { SettingsForm } from '@anthropic/laurel-design'`

Settings form panel with sections.

**Example**:
```tsx
<SettingsForm sections={[{ title: 'Profile', fields: [{ label: 'Name', type: 'text', value: name }] }, { title: 'Notifications', fields: [{ label: 'Email alerts', type: 'switch', value: emailAlerts }] }]} onSave={handleSave} />
```
