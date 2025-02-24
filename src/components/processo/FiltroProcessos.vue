<script setup lang="ts">
import EqFormFiltro from 'components/EqFormFiltro.vue';
import { FiltroProcessoParams } from 'components/processo/models';
import SelectTipoProcesso from 'components/tipo-processo/SelectTipoProcesso.vue';

const model = defineModel<FiltroProcessoParams>({ required: true })

defineEmits(['filter'])
</script>

<template>
  <eq-form-filtro
    @reset="model = {}"
    @submit="$emit('filter')"
  >

    <select-tipo-processo
      v-model="model.idTipoProcesso"
      label="Tipo de Processo"
      class="col-md-grow col-12"
      option-value="id"
      map-options
      emit-value
      hide-bottom-space
      hide-hint
      clearable
    />

    <q-input
      v-model="model.numero"
      label="Número"
      class="col-md-grow col-12"
      clearable
    />

  </eq-form-filtro>
</template>

<style scoped>
:deep(.q-focus-helper) {
  visibility: hidden;
}
</style>
