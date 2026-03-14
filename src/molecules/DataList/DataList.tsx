import { forwardRef } from 'react';
import type {
  DataListProps,
  DataListItemProps,
  DataListLabelProps,
  DataListValueProps,
} from './DataList.types';

const DataList = forwardRef<HTMLDListElement, DataListProps>(
  ({ orientation = 'vertical', className = '', children, ...rest }, ref) => (
    <dl
      ref={ref}
      className={[
        'font-[family-name:var(--laurel-font-sans)]',
        orientation === 'horizontal' ? 'grid grid-cols-[auto_1fr] gap-x-[var(--laurel-space-4)] gap-y-[var(--laurel-space-2)]' : 'space-y-[var(--laurel-space-4)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </dl>
  ),
);

DataList.displayName = 'DataList';

const DataListItem = forwardRef<HTMLDivElement, DataListItemProps>(
  ({ className = '', children, ...rest }, ref) => (
    <div
      ref={ref}
      className={['contents', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  ),
);

DataListItem.displayName = 'DataListItem';

const DataListLabel = forwardRef<HTMLElement, DataListLabelProps>(
  ({ className = '', children, ...rest }, ref) => (
    <dt
      ref={ref}
      className={[
        'text-[length:var(--laurel-font-size-sm)] font-[var(--laurel-font-weight-medium)]',
        'text-[var(--laurel-text-muted)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </dt>
  ),
);

DataListLabel.displayName = 'DataListLabel';

const DataListValue = forwardRef<HTMLElement, DataListValueProps>(
  ({ className = '', children, ...rest }, ref) => (
    <dd
      ref={ref}
      className={[
        'text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-secondary)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </dd>
  ),
);

DataListValue.displayName = 'DataListValue';

export { DataList, DataListItem, DataListLabel, DataListValue };
