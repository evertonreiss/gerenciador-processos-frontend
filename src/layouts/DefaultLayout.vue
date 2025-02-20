<template>
  <q-layout view="hHh lpR fFf" class="bg-light">
    <q-header elevated class="text-grey-8 q-py-xs" height-hint="58" >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          color="white"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
          <q-icon :name="fabVuejs" color="white" size="28px" />
          <q-toolbar-title shrink  class="text-weight-bold text-white" >
            Veredictum
          </q-toolbar-title>
        </q-btn>

        <q-space />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="text-uppercase text-weight-bold text-subtitle2 bg-secondary text-white"
      :width="240"
    >
      <q-scroll-area class="fit" >
        <q-list padding>
          <q-item v-for="link in menu" :key="link.name" :to="link.link" v-ripple clickable active-class="text-accent bg-primary">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { fabVuejs } from '@quasar/extras/fontawesome-v6'
import { menu } from 'src/utils/menu';


const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>

<style lang="scss">
.YL {
  &__toolbar-input-container {
    min-width: 100px;
    width: 55%;
  }

  &__toolbar-input-btn {
    border-radius: 0;
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: rgba(0, 0, 0, 0.24);
    max-width: 60px;
    width: 100%;
  }

  &__drawer-footer-link {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.75rem;

    &:hover {
      color: #000;
    }
  }
}

.bg-header {
  background-color: #1e293b;
}
</style>
