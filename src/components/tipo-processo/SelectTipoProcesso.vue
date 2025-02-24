<script setup lang="ts">
import { TipoProcesso } from 'components/models';
import { useTipoProcessoStore } from 'stores/cadastro/tipo-processo-store';
import { onMounted, Ref, ref } from 'vue';
import { QSelectProps } from 'quasar';

const tipoProcessoStore = useTipoProcessoStore()

const loadingTipos = ref(false)

const tiposProcessos: Ref<TipoProcesso[]> = ref([])

const props = withDefaults(defineProps<QSelectProps>(), {
  optionLabel: 'nome',
  label: 'Tipo de Processo'
})

const carregarTipoProcesso = async () => {
  if (props.readonly) {
    return;
  }

  loadingTipos.value = true
  const { content } = await tipoProcessoStore.list()
  tiposProcessos.value = content
  loadingTipos.value = false
}

onMounted(carregarTipoProcesso)
</script>

<template>
  <q-select
    v-bind="$props"
    :loading="loadingTipos"
    :options="tiposProcessos"
  />
</template>
