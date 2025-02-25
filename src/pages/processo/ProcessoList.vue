<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { Paginacao } from 'components/models';
import { FiltroProcessoParams } from 'components/processo/models';
import TabelaProcessos from 'components/processo/TabelaProcessos.vue';
import FiltroProcessos from 'components/processo/FiltroProcessos.vue';
import { useProcessoStore } from 'stores/processo/processo-store';


const filtro: Ref<FiltroProcessoParams> = ref({})

const processoes = ref([])
const loading = ref(false)

const processoStore = useProcessoStore()


const paginacao: Ref<Paginacao> = ref({
  sortBy: 'desc',
  descending: false,
  page: 0,
  rowsPerPage: 5,
  rowsNumber: 1
})

const listarProcessos = async ({ pagination }: any = {}) => {
  loading.value = true
  if(pagination) paginacao.value = pagination

  const filtros = {
    size: paginacao.value.rowsPerPage,
    page: paginacao.value.page -1,
    ...filtro.value
  }

  const { content, totalElements } = await processoStore.list(filtros)


  processoes.value = content;
  paginacao.value.rowsNumber = totalElements
  loading.value = false
}


onMounted(listarProcessos)
</script>

<template>
  <q-page class="q-px-md q-py-md">

    <div class="row full-width">
      <q-breadcrumbs class="q-mb-md text-subtitle1 items-end justify-end full-width">
        <q-breadcrumbs-el label="Início" to="/" />
        <q-breadcrumbs-el label="Processos" />
      </q-breadcrumbs>
    </div>

    <filtro-processos v-model="filtro" class="q-mb-md" @filter="listarProcessos"/>

    <tabela-processos :rows="processoes" v-model:paginacao="paginacao" @request="listarProcessos" :loading="loading" />

  </q-page>
</template>

