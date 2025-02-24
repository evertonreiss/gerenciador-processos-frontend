<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import FormLabel from 'components/FormLabel.vue';
import { useTipoProcessoStore } from 'stores/cadastro/tipo-processo-store';
import { TipoProcessoFormProps } from 'components/tipo-processo/models';
import { Rules, TipoProcesso } from 'components/models';
import { required } from 'src/utils/validations';

const props = defineProps<TipoProcessoFormProps>();

const form: Ref<TipoProcesso> = ref({});
const rules: Rules<TipoProcesso> = {
  nome: [
    (val: string) => required(val) || 'Nome é obrigatório'
  ]
}
const router = useRouter();
const processoStore = useTipoProcessoStore();

const isVisualizar = props.isReadOnly;
const saveLoading = ref(false);

const carregarTipoProcesso = async () => {
  if (!props.id) {
    return;
  }

  const data = await processoStore.get(`/${props.id}`);
  if (data) Object.assign(form.value, data);
};

onMounted(carregarTipoProcesso);
const salvarProcesso = async () => {
  saveLoading.value = true
  const response = await processoStore.save(form.value, props.id);
  saveLoading.value = true

  if (!response) {
    return;
  }

  Notify.create({
    icon: 'check_circle',
    color: 'positive',
    position: 'bottom',
    message: 'Tipo de Processo salvo com sucesso!',
    progress: true
  });

  voltarPagina();
};

const voltarPagina = () => router.back();
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
          <form-label label="Tipo Processo" />

          <div class="row q-col-gutter-x-md">
            <q-input
              v-model="form.nome"
              label="Nome *"
              class="col-md-4 col-sm-12"
              outlined
              :readonly="isVisualizar"
              :rules="rules.nome"
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
            style="width: 5em"
            color="positive"
            no-caps
            type="submit"
            :loading="saveLoading"
          />
        </q-card-actions>


      </q-card>
    </q-form>
  </q-page>

</template>
