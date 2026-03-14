import { forwardRef } from 'react';
import { PageHeader } from '../../organisms/PageHeader';
import { DataTable } from '../../organisms/DataTable';
import { Spinner } from '../../atoms/Spinner';
import type { TablePageProps } from './TablePage.types';

function TablePageInner<T extends Record<string, unknown>>(
  {
    title,
    data,
    columns,
    toolbar,
    primaryAction,
    breadcrumbs,
    loading,
    emptyState,
    className = '',
    ...rest
  }: TablePageProps<T> & { ref?: React.Ref<HTMLDivElement> },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <PageHeader title={title} breadcrumbs={breadcrumbs} actions={primaryAction} />

      {toolbar && <div className="mb-[var(--laurel-space-4)]">{toolbar}</div>}

      {loading ? (
        <div className="flex items-center justify-center py-[var(--laurel-space-16)]">
          <Spinner />
        </div>
      ) : data.length === 0 && emptyState ? (
        <>{emptyState}</>
      ) : (
        <DataTable
          columns={columns}
          data={data}
          rowKey={(row) => JSON.stringify(row)}
          searchable
          pageSize={10}
        />
      )}
    </div>
  );
}

const TablePage = forwardRef(TablePageInner) as <T extends Record<string, unknown>>(
  props: TablePageProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;

(TablePage as unknown as { displayName: string }).displayName = 'TablePage';

export { TablePage };
