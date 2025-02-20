import { defineStore } from 'pinia';
import { useCrudApi } from 'src/utils/api';
import { processoService } from 'boot/axios';


export const useProcessoStore = defineStore('processo', {
  state: () => ({
    resource: '/processos'
  }),

  actions: {
    ...useCrudApi(processoService)
  }
});
