<template>
 <q-layout style="max-height: 100px; min-height: 200px">
  <q-footer class="bg-primary text-white q-pt-lg q-pb-md">
    <div class="footer-container row q-col-gutter-md q-px-lg">

      <!-- Kolumna 1: Logo + opis -->
      <div class="col-12 col-md-4">
        <div class="text-h6 text-weight-bold q-mb-sm">Laweta-Bytów</div>
        <div class="text-caption text-white">
          Całodobowa pomoc drogowa, transport pojazdów i wynajem lawet, przyczep oraz busów – Bytów i okolice.
        </div>
      </div>

      <!-- Kolumna 2: Linki -->
      <div class="col-12 col-md-4">
        <div class="text-subtitle2 text-weight-bold q-mb-sm">Szybkie linki</div>
        <q-list dense bordered class="bg-transparent text-white links-list">
          <q-item clickable v-ripple @click="$emit('go', 'main')">
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section>Strona główna</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$emit('go', 'loaning')">
            <q-item-section avatar><q-icon name="directions_car" /></q-item-section>
            <q-item-section>Wypożyczalnia</q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- Kolumna 3: Kontakt -->
      <div class="col-12 col-md-4">
        <div class="text-subtitle2 text-weight-bold q-mb-sm">Kontakt</div>
        <div class="q-mb-xs">
          <q-icon name="place" size="16px" class="q-mr-sm" />
          Bytów, ul. Transportowa 12
        </div>
        <div class="q-mb-xs cursor-pointer" @click="callPhone">
          <q-icon name="phone" size="16px" class="q-mr-sm" />
          +48 600 800 900
        </div>
        <div class="cursor-pointer" @click="sendEmail">
          <q-icon name="email" size="16px" class="q-mr-sm" />
          kontakt@laweta-bytow.pl
        </div>
        <div class="q-mt-sm text-caption">
          <q-icon name="access_time" size="16px" class="q-mr-sm" />
          Pon – Sob: 08:00 – 18:00
        </div>
      </div>

    </div>

    <!-- Dolny pasek -->
    <div class="footer-bottom text-center text-caption q-mt-md q-pt-sm">
      © {{ new Date().getFullYear() }} Laweta-Bytów. Wszelkie prawa zastrzeżone.
    </div>
  </q-footer>
   </q-layout>
</template>

<script setup>
const callPhone = () => {
  window.location.href = 'tel:+48600800900'
}
const sendEmail = () => {
  window.location.href = 'mailto:kontakt@laweta-bytow.pl'
}
</script>

<style scoped lang="scss">
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.links-list {
  background: transparent;
  border: none;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
}
</style>
