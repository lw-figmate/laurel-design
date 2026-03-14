import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DataListProps extends ComponentPropsWithRef<'dl'> {
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** DataList items */
  children: ReactNode;
}

export interface DataListItemProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export interface DataListLabelProps extends ComponentPropsWithRef<'dt'> {
  children: ReactNode;
}

export interface DataListValueProps extends ComponentPropsWithRef<'dd'> {
  children: ReactNode;
}
