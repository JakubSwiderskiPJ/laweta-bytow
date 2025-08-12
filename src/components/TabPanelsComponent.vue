<template>
  <q-card flat class="tabs-wrapper">
    <!-- Nagłówki zakładek -->
    <q-tabs
      v-model="tab"
      class="text-blue tabs-buttons"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="main" label="Strona Główna" class="tab-label-big" />
      <q-tab name="loaning" label="Wypożyczalnia" class="tab-label-big" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="main" class="q-pa-none">
        <MainPage />
      </q-tab-panel>

      <q-tab-panel name="loaning" class="q-pa-none">
        <LoaningPage />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import MainPage from 'pages/MainPage.vue'
import LoaningPage from 'pages/LoaningPage.vue'

const tab = ref('main')
</script>

<style scoped lang="scss">
.tabs-wrapper {
  background: transparent;
  box-shadow: none;
}


</style>
