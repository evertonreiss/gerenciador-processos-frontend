import { Column, Processo } from 'components/models';


export interface FiltroProcessoParams {
  idTipoProcesso?: string,
  numero?: string,
}

export interface ProcessoFormProps {
  id?: number,
  isReadOnly: boolean,
  modo: string
}

export const ProcessosColumns: Column[] = [
  {
    name: 'tipoProcesso',
    label: 'Tipo Processo',
    field: (processo: Processo) => processo.tipoProcesso?.nome,
    align: 'left',
    style: 'width: 30%',
  },
  {
    name: 'numero',
    label: 'Número',
    field: (processo: Processo) => processo.numero,
    align: 'left',
    style: 'width: 20%',
  },
  {
    name: 'dataEntrada',
    label: 'Data Entrada',
    field: (processo: Processo) => processo.dataEntrada,
    format: (date: string) => new Date(date).toLocaleDateString(),
    align: 'left',
    style: 'width: 20%',
  },
  {
    name: 'valorRecurso',
    label: 'Valor Recurso',
    field: (processo: Processo) => processo.valorRecurso,
    format: (valor: number | undefined) => valor?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
    align: 'left',
    style: 'width: 20%',
  },
  {
    name: 'acoes',
    label: 'Ações',
    field: 'acoes',
    align: 'center',
    style: 'width: 5%',
  }
]
