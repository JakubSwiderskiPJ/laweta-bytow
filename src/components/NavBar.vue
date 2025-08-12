<template>

    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title class="main-logo" @click="$router.push('/')">
        Laweta-Bytów
      </q-toolbar-title>
      <q-btn
        flat
        dense
        color="white"
        label="Strona główna"
        @click="$router.push('/')"
        class="q-ml-sm"
      />
      <q-btn
        flat
        dense
        color="white"
        label="Wypożyczalnia"
        @click="$router.push('/wypozyczalnia')"
        class="q-ml-sm"
      />
    </q-toolbar>

</template>

<style scoped lang="scss">
.main-navbar {
  box-shadow: 0 2px 12px #0e47a10e;
}
.main-logo {
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.03em;
}
</style>
<script setup lang="ts">
</script>
