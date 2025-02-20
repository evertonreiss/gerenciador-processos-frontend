import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const cadastroService = axios.create({ baseURL: '/cadastro-service' });
const processoService = axios.create({ baseURL: '/processo-service' });


export { cadastroService, processoService };
