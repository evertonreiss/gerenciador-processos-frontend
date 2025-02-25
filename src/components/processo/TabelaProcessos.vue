<script setup lang="ts">
import { Paginacao } from 'components/models';
import { useRouter } from 'vue-router';
import { ProcessosColumns } from 'components/processo/models';
import { QTableProps, useQuasar } from 'quasar';
import { useProcessoStore } from 'stores/processo/processo-store';

const emit = defineEmits(['request'])

defineProps<QTableProps>()

const pagination = defineModel<Paginacao>('paginacao')

const router = useRouter()
const $q = useQuasar()
const processoStore = useProcessoStore()

const dialogConfirmar = async (id: number, numero: number) => {
const options = {
  title: 'Confirmar',
  message: `Você tem certeza que deseja excluir o processo Nº ${numero}?`,
  ok: {
    label: 'Confirmar',
    color: 'negative'
  },
  cancel: {
  }
}

$q.dialog(options).onOk(() => {
  processoStore.delete(id)
  emit('request')
})
}

const redirecionar = (mode: string, id: number) => router.push({
    name: `processos-${mode}`,
    query: { id }
  })
</script>

<template>
  <q-table
    v-bind="$props"
    title="Processos"
    :columns="ProcessosColumns"
    :rows-per-page-options="[5, 10, 15, 20]"
    class="rounded"
    separator="cell"
    table-header-class="bg-primary text-white text-weight-bolder text-uppercase"
    v-model:pagination="pagination"
    @request="$emit('request')"
  >
    <template #top-right>
      <q-btn
        label="Novo Processo"
        color="positive"
        text-color="white"
        :to="{ name: 'processos-novo' }"

      />
    </template>


    <template #body-cell-acoes="{ row }">
      <q-td>
        <div class="acoes row justify-center q-gutter-xs">
          <q-btn icon="fa-solid fa-pen" color="info" dense @click="redirecionar('editar', row.id)">
            <q-tooltip anchor="top middle" self="bottom middle">Editar</q-tooltip>
          </q-btn>

          <q-btn icon="fa-solid fa-trash" color="negative" dense @click="dialogConfirmar(row.id, row.numero)">
            <q-tooltip anchor="top middle" self="bottom middle">Excluir</q-tooltip>
          </q-btn>
        </div>
      </q-td>
    </template>

  </q-table>
</template>

<style scoped>
.acoes {
  visibility: hidden;
}
tr:hover .acoes {
  visibility: visible;
}
</style>
