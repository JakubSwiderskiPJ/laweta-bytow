<template>
  <div class="page-wrapper">
    <!-- Decorative Background Elements -->
    <div class="bg-decoration bg-decoration-1"></div>
    <div class="bg-decoration bg-decoration-2"></div>
    <div class="bg-decoration bg-decoration-3"></div>

    <div class="content-container">
      <CarouselSection />
      <MainPageCardComponent/>
      <MapSection  />
      <VatSection/>
      <FooterSection/>

    </div>
  </div>
</template>

<script setup>
import CarouselSection from 'components/CarouselSection.vue'
import MainPageCardComponent from 'components/MainPageCardComponent.vue'
import FooterSection from 'components/FooterSection.vue'
import MapSection from 'components/MapSection.vue'
import VatSection from 'components/VatSection.vue'
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%);
  position: relative;
  overflow: hidden;
}

// Dekoracyjne elementy tła
.bg-decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
}

.bg-decoration-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  top: -200px;
  left: -200px;
  animation: float 20s ease-in-out infinite;
}

.bg-decoration-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  top: 50%;
  right: -150px;
  animation: float 15s ease-in-out infinite reverse;
}

.bg-decoration-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  bottom: -150px;
  left: 30%;
  animation: float 18s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(20px);
  }
}

.content-container {
  position: relative;
  z-index: 1;
  padding: 20px 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
}
</style>
