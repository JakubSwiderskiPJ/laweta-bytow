<template>
  <section class="q-mx-auto carousel-section">
    <q-carousel
      v-model="slide"
      animated
      arrows
      swipeable
      navigation
      infinite
      :autoplay="5000"
      pause-on-hover
      transition-prev="slide-right"
      transition-next="slide-left"
      height="480px"
      class="rounded-borders shadow-2"
    >
      <q-carousel-slide
        v-for="(img, index) in images"
        :key="index"
        :name="index + 1"
        :img-src="img"
        class="carousel-slide"
      />
    </q-carousel>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// aktywny slajd
const slide = ref(1)

// import lokalnych obrazów – podmień na swoje ścieżki
import slide1 from 'assets/7.jpg'
import slide2 from 'assets/laweta.jpg'
import slide3 from 'assets/logo-chmielewski.svg'

const images = [slide1, slide2, slide3]
</script>

<style scoped lang="scss">
.carousel-section {
  max-width: 1800px;
}
</style>
