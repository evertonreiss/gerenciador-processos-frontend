<script setup lang="ts">
defineEmits(['reset', 'submit'])
</script>

<template>
  <q-card
    class="rounded"
    tag="form"
    @reset="$emit('reset')"
    @submit.prevent="$emit('submit')"
  >
    <q-card-section>
      <span class="q-table__title">Filtros</span>
      <q-separator />
    </q-card-section>

    <q-card-section class="row justify-between items-center q-col-gutter-md">
      <slot/>
    </q-card-section>

    <q-card-actions class="q-px-md q-pb-md" >
      <slot name="buttons">
        <div class="row full-width justify-end q-gutter-sm">
          <q-btn color="grey-4" text-color="dark" label="limpar" type="reset" class="col-md-1 col-12"/>
          <q-btn color="primary" label="filtrar" type="submit" class="col-md-1 col-12"/>
        </div>
      </slot>
    </q-card-actions>
  </q-card>

</template>
