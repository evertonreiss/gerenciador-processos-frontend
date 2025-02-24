<script setup lang="ts">
import EqFormFiltro from 'components/EqFormFiltro.vue';
import { FiltroTipoProcessoParams } from 'components/tipo-processo/models';

const filtro = defineModel<FiltroTipoProcessoParams>({ required: true })

defineEmits(['filter'])
</script>

<template>
  <eq-form-filtro
    @reset="filtro = {}"
    @submit="$emit('filter')"
  >

    <q-input
      v-model="filtro.nome"
      label="Nome"
      class="col-md-grow col-12 q-mr-md"
    />

  </eq-form-filtro>
</template>
