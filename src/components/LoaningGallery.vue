<template>
  <section class="q-mx-auto carousel-section">
    <q-carousel
      v-model="activeSlide"
      animated
      navigation
      arrows
      :autoplay="5000"
      infinite
      pause-on-hover
      transition-prev="slide-right"
      transition-next="slide-left"
      height="600px"
      class="rounded-borders shadow-2 overflow-hidden"
    >
      <q-carousel-slide
        v-for="(img, i) in allImages"
        :key="i"
        :name="i + 1"
        class="carousel-slide"
      >
        <!-- klucz: q-img + fit="contain" + 100% rozmiaru slajdu -->
        <q-img
          :src="img"
          fit=""
          class="absolute-full"
          :native-context-menu="false"
          draggable="draggable"
        />
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import img1 from 'assets/images/DSC_3170.jpg'
import img2 from 'assets/images/DSC_3185.jpg'
import img3 from 'assets/images/DSC_3200.jpg'
import img4 from 'assets/images/DSC_9942.jpg'
import img5 from 'assets/images/DSC_9962.jpg'
import img6 from 'assets/images/DSC_9963.jpg'
import img7 from 'assets/images/DSC_9980.jpg'
import img8 from 'assets/images/DSC_9985.jpg'
import img9 from 'assets/images/P2.jpg'
import img10 from 'assets/images/P4.jpg'
import img11 from 'assets/images/P5.jpg'
import img12 from 'assets/images/P7.jpg'
import img13 from 'assets/images/P9.jpg'
import img14 from 'assets/images/bus/DSC_7689.jpg'
import img15 from 'assets/images/bus/DSC_7708.jpg'
import img16 from 'assets/images/bus/DSC_7724.jpg'
import img17 from 'assets/images/bus/DSC_7734.jpg'
import img18 from 'assets/images/bus/DSC_7759.jpg'

const allImages = [
  img1,img2,img3,img4,
img5,
img6,
img7,
img8,
img9,
img10,
img11,
img12,
img13,
img14,
img15,
img16,
  img17,
  img18

]
const activeSlide = ref(0)

</script>

<style scoped lang="scss">

.carousel-section { max-width: 1800px; }

/* slajd jako „ramka” dla obrazka */
.carousel-slide {
  position: relative;
}

/* na wszelki wypadek wyłącz szczelinę baseline dla <img> wewnątrz q-img */
:deep(.q-img__image) {
  display: block;
}
</style>
