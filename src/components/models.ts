import { ValidationRule } from 'quasar/dist/types/api';

export interface TipoProcesso {
  id?: number,
  nome?: string,
}

export interface Processo {
  id?: number,
  tipoProcesso?: TipoProcesso,
  numero?: number,
  dataEntrada?: string,
  valorRecurso?: number,
  objetivo?: string,
}

export interface Column {
  name: string;
  label: string;
  field: string | ((row: any) => any);
  required?: boolean;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
  sort?: (a: any, b: any, rowA: any, rowB: any) => number;
  rawSort?: (a: any, b: any, rowA: any, rowB: any) => number;
  sortOrder?: 'ad' | 'da';
  format?: (val: any, row: any) => any;
  style?: string | ((row: any) => string);
  classes?: string | ((row: any) => string);
  headerStyle?: string;
  headerClasses?: string;
}

export type Rules<T> = Partial<Record<keyof T, ValidationRule[]>>

export interface Paginacao {
  sortBy: 'desc' | 'asc',
  descending: boolean,
  page: number,
  size: number,
  rowsNumber: number
}

export interface FormLabelProps {
  label: string,
  labelClass?: string
}
