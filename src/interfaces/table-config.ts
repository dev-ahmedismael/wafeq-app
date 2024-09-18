export interface ColumnConfig {
  header: string;
  key: string;
  type: string;
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableOptions {
  sortable?: boolean;
  filterable?: boolean;
  importable?: boolean;
  exportable?: boolean;
  editable?: boolean;
  creatable?: boolean;
  path?: string;
}

export type TableConfig = ColumnConfig[];
