<template>
    <CarouselSection />

  <MainPageCardComponent/>

  <MapSection style="margin: 0px 0px 30px 0px;" />

  <FooterSection/>
</template>

<script setup>
import CarouselSection from 'components/CarouselSection.vue'
import MainPageCardComponent from 'components/MainPageCardComponent.vue'
import FooterSection from 'components/FooterSection.vue'
import MapSection from 'components/MapSection.vue'
</script>

<style lang="scss" scoped>
.main-section {
  background: #fff;
  border-radius: 19px;
  box-shadow: 0 2px 22px #09368a17;
  max-width: 670px;
  margin: 40px auto 0 auto;
}
.main-desc {
  color: #5f6368;
  font-size: 1.08rem;
  line-height: 1.7;
  margin-bottom: 18px;
}
.main-desc b {
  color: #0e47a1;
  font-weight: 600;
}
.main-desc-final {
  color: #0e47a1;
  font-size: 1.14rem;
  font-weight: bold;
  margin-bottom: 0;
}
</style>
