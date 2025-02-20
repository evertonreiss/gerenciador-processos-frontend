<template>
  <q-page class="q-pa-lg">
    <div class="row" style="display: flex; gap: 20px">
      <q-btn
        v-for="link in menuDashboard"
        :key="link.name"
        :icon="link.icon"
        :label="link.title"
        :to="link.link"
        color="white"
        text-color="primary"
        class="rounded col-xl-1 col-lg-2 col-md-3 col-12 text-body1 text-bold"
        style="height: 120px; min-width: 280px"
      />
    </div>

  </q-page>
</template>

<script setup lang="ts">
import { menuDashboard } from 'src/utils/menu';
</script>
