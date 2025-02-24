<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import { ProcessoFormProps } from 'components/processo/models';
import FormLabel from 'components/FormLabel.vue';
import { Processo, Rules } from 'components/models';
import { useProcessoStore } from 'stores/processo/processo-store';
import QCurrencyInput from 'components/QCurrencyInput.vue';
import SelectTipoProcesso from 'components/tipo-processo/SelectTipoProcesso.vue';
import { isFutureDate, nonNullish, required } from 'src/utils/validations';



const props = defineProps<ProcessoFormProps>()

const form: Ref<Processo> = ref({
  valorRecurso: 0
});

const rules: Rules<Processo> = {
  valorRecurso: [
    () =>  required(form.value.valorRecurso)  || 'Valor do Recurso é obrigatório'
  ],
  numero: [
    (valor: string) => required(valor) || 'Valor é obrigatório'
  ],
  dataEntrada: [
    (valor: string) => required(valor) || 'Data de entrada é obrigatória',
    (valor: string) => !isFutureDate(valor) || 'Data de entrada não permite data futura'
  ],
  objetivo: [
    (valor: string) => required(valor) || 'Objetivo é obrigatório',
  ],
  tipoProcesso: [
    (valor: string) => nonNullish(valor) || 'Tipo de Processo é obrigatório',
  ]

}


const router = useRouter();
const processoStore = useProcessoStore()


const isVisualizar = props.isReadOnly
const dataHoje = new Date().toISOString().split('T')[0]
const saveLoading = ref(false)

const carregarProcesso = async () => {
  const data = await processoStore.get(`/${props.id}`)
  if (data) Object.assign(form.value, data)
}
const salvarProcesso = async () => {
  saveLoading.value = true
  const response = await processoStore.save(form.value, props.id)
  saveLoading.value = false

  if (!response) {
    return;
  }

  Notify.create({
    icon: 'check_circle',
    color: 'positive',
    position: 'bottom',
    message: 'Processo salvo com sucesso!',
    progress: true
  });

  voltarPagina()
};

const voltarPagina = () => router.back()

const carregarPaginaHook = async () => {
  if (props.id) {
    await carregarProcesso()
  }
}

onMounted(carregarPaginaHook)
</script>

<template>
  <q-page class="q-px-md q-py-md">

    <q-breadcrumbs class="q-mb-md text-subtitle1">

      <q-breadcrumbs-el label="Início" :to="{ name: 'home' }" />

      <q-breadcrumbs-el label="Processo" :to="{ name: 'tutor-listagem' }" />

      <q-breadcrumbs-el :label="modo" />

    </q-breadcrumbs>
    <q-form @submit="salvarProcesso" autofocus greedy>
      <q-card class="rounded">
          <q-card-section>
            <form-label label="Processo" />

            <div class="row q-col-gutter-md">
              <q-input
                v-model="form.numero"
                label="Número *"
                class="col-lg-3 col-md-6 col-12"
                outlined
                :readonly="isVisualizar"
                :rules="rules.numero"
              />

              <q-input
                v-model="form.dataEntrada"
                type="date"
                label="Data de Entrada *"
                class="col-lg-3 col-md-6 col-12"
                outlined
                :readonly="isVisualizar"
                :rules="rules.dataEntrada"
                :max='dataHoje'
              />

              <select-tipo-processo
                v-model="form.tipoProcesso"
                label="Tipo de Processo *"
                class="col-lg-3 col-md-6 col-12"
                :readonly="isVisualizar"
                :hide-dropdown-icon="isReadOnly"
                outlined
                hide-bottom-space
                hide-hint
                :rules="rules.tipoProcesso"
              />

              <q-currency-input
                v-model="form.valorRecurso!"
                label="Valor do recurso *"
                class="col-lg-3 col-md-6 col-12"
                outlined
                :readonly="isVisualizar"
                :rules="rules.valorRecurso"
                lazy-rules
              />

              <q-input
                v-model="form.objetivo"
                label="Objetivo *"
                type="textarea"
                class="col-12 rounded dark-border"
                outlined
                :readonly="isVisualizar"
                :rules="rules.objetivo"
              />

            </div>
          </q-card-section>


          <q-card-actions align="right" class="q-mr-sm q-mt-sm">
            <q-btn
              label="Sair"
              style="width: 4em"
              color="grey-7"
              no-caps
              @click="voltarPagina"
            />
            <q-btn
              v-if="!isVisualizar"
              label="Salvar"
              type="submit"
              style="width: 5em"
              color="positive"
              no-caps
              :loading="saveLoading"
            />
          </q-card-actions>

      </q-card>
    </q-form>
  </q-page>

</template>
