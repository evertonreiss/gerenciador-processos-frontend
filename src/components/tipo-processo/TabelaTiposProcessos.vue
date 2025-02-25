<script setup lang="ts">
import { Paginacao } from 'components/models';
import { useRouter } from 'vue-router';
import { QTableProps, useQuasar } from 'quasar';
import { TipoProcessosColumns } from 'components/tipo-processo/models';
import { useTipoProcessoStore } from 'stores/cadastro/tipo-processo-store';

const emit = defineEmits(['request'])

defineProps<QTableProps>()

const pagination = defineModel<Paginacao>('paginacao')

const router = useRouter()
const $q = useQuasar()
const tipoProcessoStore = useTipoProcessoStore()

const dialogConfirmar = async (id: number, nome: number) => {
  const options = {
    title: 'Confirmar',
    message: `Você tem certeza que deseja excluir o tipo de processo "${nome}"?`,
    ok: {
      label: 'Confirmar',
      color: 'negative'
    },
    cancel: {
    }
  }

  $q.dialog(options).onOk(() => {
    tipoProcessoStore.delete(id)
    emit('request')
  })
}

const redirecionar = (mode: string, id: number) => router.push({
    name: `tipos-processos-${mode}`,
    query: { id }
  })
</script>

<template>
  <q-table
    v-bind="$props"
    title="Tipos de Processos"
    :columns="TipoProcessosColumns"
    :rows-per-page-options="[5, 10, 15, 20]"
    v-model:pagination="pagination"
    class="rounded"
    separator="cell"
    table-header-class="bg-primary text-white text-weight-bolder text-uppercase"
    @request="$emit('request')"
  >
    <template #top-right>
      <q-btn
        label="Novo Tipo Processo"
        color="positive"
        :to="{ name: 'tipos-processos-novo' }"
      />
    </template>


    <template #body-cell-acoes="{ row }">
      <q-td>
        <div class="acoes row justify-center q-gutter-xs">
          <q-btn icon="fa-solid fa-pen" color="info" dense @click="redirecionar('editar', row.id)">
            <q-tooltip anchor="top middle" self="bottom middle">Editar</q-tooltip>
          </q-btn>
          <q-btn icon="fa-solid fa-trash" color="negative" dense @click="dialogConfirmar(row.id, row.nome)">
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
