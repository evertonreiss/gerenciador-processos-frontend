import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: {
      menu: { title: 'Início', icon: 'home', hideOnDashboard: true }
    },
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      },
    ],
  },

  {
    path: '/processos',
    name: 'processos',
    component: () => import('layouts/DefaultLayout.vue'),
    meta: {
      menu: { title: 'Processos', icon: 'fas fa-scale-balanced' }
    },
    children: [
      {
        path: '',
        name: 'processos-listagem',
        component: () => import('pages/processo/ProcessoList.vue')
      },
      {
        path: 'novo',
        name: 'processos-novo',
        props: {
          isReadOnly: false,
          modo: 'novo'
        },
        component: () => import('pages/processo/ProcessoForm.vue')
      },
      {
        path: 'visualizar',
        name: 'processos-visualizar',
        props: route => ({
          id: Number(route.query.id),
          isReadOnly: true,
          modo: 'visualizar'
        }),
        component: () => import('pages/processo/ProcessoForm.vue')
      },
      {
        path: 'editar',
        name: 'processos-editar',
        props: route => ({
            id: Number(route.query.id),
            isReadOnly: false,
          modo: 'editar'
        }),
        component: () => import('pages/processo/ProcessoForm.vue')}
    ],
  },

  {
    path: '/tipos-processos',
    name: 'tipos-processos',
    component: () => import('layouts/DefaultLayout.vue'),
    meta: {
      menu: { title: 'Tipos de Processos', icon: 'fas fa-tags' }
    },
    children: [
      {
        path: '',
        name: 'tipos-processos-listagem',
        component: () => import('pages/tipo-processo/TipoProcessoList.vue')
      },
      {
        path: 'novo',
        name: 'tipos-processos-novo',
        props: {
          isReadOnly: false,
          modo: 'novo'
        },
        component: () => import('pages/tipo-processo/TipoProcessoForm.vue')
      },
      {
        path: 'visualizar',
        name: 'tipos-processos-visualizar',
        props: route => ({
          id: Number(route.query.id),
          isReadOnly: true,
          modo: 'visualizar'
        }),
        component: () => import('pages/tipo-processo/TipoProcessoForm.vue')
      },
      {
        path: 'editar',
        name: 'tipos-processos-editar',
        props: route => ({
          id: Number(route.query.id),
          isReadOnly: false,
          modo: 'editar'
        }),
        component: () => import('pages/tipo-processo/TipoProcessoForm.vue')
      }
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {path: '', component: () => import('pages/ErrorNotFound.vue'),}
    ]
  },
];

export default routes;
