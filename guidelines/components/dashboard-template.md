### DashboardTemplate

**Import**: `import { DashboardTemplate } from '@anthropic/laurel-design'`

Dashboard page layout with header, sidebar, and content area.

**Example**:
```tsx
<DashboardTemplate title="Dashboard" sidebar={<Sidebar />} stats={<StatDashboard items={stats} />}>
  <DataTable columns={columns} data={data} />
</DashboardTemplate>
```
