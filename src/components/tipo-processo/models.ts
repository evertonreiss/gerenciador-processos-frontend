import { Column, Processo, TipoProcesso } from 'components/models';


export interface FiltroTipoProcessoParams {
  nome?: string
}

export interface TipoProcessoFormProps {
  id: number,
  isReadOnly: boolean,
  modo: string
}

export const TipoProcessosColumns: Column[] = [
  {
    name: 'id',
    label: '#',
    field: (processo: Processo) => processo.id,
    align: 'left',
    style: 'width: 5%',
  },
  {
    name: 'tipoProcesso',
    label: 'Tipo Processo',
    field: (processo: TipoProcesso) => processo.nome,
    align: 'left',
    style: 'width: 85%',
  },
  {
    name: 'acoes',
    label: 'Ações',
    field: 'acoes',
    align: 'center',
    style: 'width: 10%',
  }
]
