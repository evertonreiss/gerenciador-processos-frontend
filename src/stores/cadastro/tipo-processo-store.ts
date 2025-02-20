import { defineStore } from 'pinia';
import { useCrudApi } from 'src/utils/api';
import { cadastroService } from 'boot/axios';


export const useTipoProcessoStore = defineStore('tipoProcesso', {
  state: () => ({
    resource: '/processos/tipo-processo'
  }),

  actions: {
    ...useCrudApi(cadastroService)
  }
});
