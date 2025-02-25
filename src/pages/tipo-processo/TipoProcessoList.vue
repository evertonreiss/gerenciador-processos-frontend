<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { Paginacao } from 'components/models';
import { useTipoProcessoStore } from 'stores/cadastro/tipo-processo-store';
import { FiltroTipoProcessoParams } from 'components/tipo-processo/models';
import TabelaTiposProcessos from 'components/tipo-processo/TabelaTiposProcessos.vue';
import FiltroTiposProcessos from 'components/tipo-processo/FiltroTiposProcessos.vue';


const filtro: Ref<FiltroTipoProcessoParams> = ref({})

const tiposProcessos = ref([])
const loading = ref(false)

const processoStore = useTipoProcessoStore()


const paginacao: Ref<Paginacao> = ref({
  sortBy: 'desc',
  descending: false,
  page: 0,
  rowsPerPage: 5,
  rowsNumber: 1
})

const listarTiposProcessos = async ({ pagination }: any = {}) => {
  loading.value = true
  if(pagination) paginacao.value = pagination
  console.log(pagination, paginacao.value)
  const filtros = {
    size: paginacao.value.rowsPerPage,
    page: paginacao.value.page -1,
    ...filtro.value,
  }

  const { content, totalElements } = await processoStore.list(filtros)


  tiposProcessos.value = content;
  paginacao.value.rowsNumber = totalElements
  loading.value = false
}


onMounted(listarTiposProcessos)
</script>

<template>
  <q-page class="q-px-md q-py-md">

    <div class="row full-width">
      <q-breadcrumbs class="q-mb-md text-subtitle1 items-end justify-end full-width">
        <q-breadcrumbs-el label="Início" to="/" />
        <q-breadcrumbs-el label="Tipos Processos" />
      </q-breadcrumbs>
    </div>

    <filtro-tipos-processos v-model="filtro" class="q-mb-md" @filter="listarTiposProcessos"/>

    <tabela-tipos-processos :rows="tiposProcessos" v-model:paginacao="paginacao" @request="listarTiposProcessos" :loading="loading" />

  </q-page>
</template>

