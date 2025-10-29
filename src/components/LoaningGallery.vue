<template>
  <section class="hero-gallery-section">
    <!-- Main Featured Image -->
    <div class="main-image-container">
      <div class="image-wrapper">
        <img
          :src="images[activeIndex]"
          :alt="`Slide ${activeIndex + 1}`"
          class="main-image"
        />
        <div class="overlay-gradient"></div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide" class="nav-arrow nav-arrow-left" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button @click="nextSlide" class="nav-arrow nav-arrow-right" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Thumbnail Gallery -->
    <div class="thumbnail-gallery">
      <div class="thumbnails-container">
        <button
          v-for="(img, index) in images"
          :key="index"
          @click="activeIndex = index"
          :class="['thumbnail', { active: activeIndex === index }]"
        >
          <img :src="img" :alt="`Thumbnail ${index + 1}`" />
          <div class="thumbnail-overlay"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import img1 from 'assets/1200x900/Filip10.jpg'
import img2 from 'assets/1200x900/Filip11.jpg'
import img3 from 'assets/1200x900/Filip12.jpg'
import img4 from 'assets/1200x900/Filip13.jpg'
import img5 from 'assets/1200x900/Filip14.jpg'
import img6 from 'assets/1200x900/Filip15.jpg'
import img7 from 'assets/1200x900/Filip16.jpg'
import img8 from 'assets/1200x900/Filip18.jpg'
import img9 from 'assets/1200x900/Filip18.jpg'
import img10 from 'assets/1200x900/Filip19.jpg'
import img11 from 'assets/1200x900/Filip24.jpg'
import img12 from 'assets/1200x900/Filip1.jpg'
import img13 from 'assets/1200x900/Filip2.jpg'
import img14 from 'assets/1200x900/Filip3.jpg'
import img15 from 'assets/1200x900/Filip4.jpg'
import img16 from 'assets/1200x900/Filip5.jpg'
import img17 from 'assets/1200x900/Filip6.jpg'
import img18 from 'assets/1200x900/Filip7.jpg'

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18
]
const activeIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % images.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped lang="scss">
.hero-gallery-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 12px;
  }
}

.main-image-container {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  background: #1a1a1a;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* 4:3 aspect ratio for 1200x900 photos */

  @media (max-width: 768px) {
    padding-bottom: 75%; /* Keep 4:3 on mobile too */
  }
}

.main-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed from cover to contain - shows full image */
  transition: transform 0.3s ease;
}

.overlay-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  pointer-events: none;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.nav-arrow-left {
  left: 20px;

  @media (max-width: 768px) {
    left: 10px;
  }
}

.nav-arrow-right {
  right: 20px;

  @media (max-width: 768px) {
    right: 10px;
  }
}

.thumbnail-gallery {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;

    &:hover {
      background: #999;
    }
  }
}

.thumbnails-container {
  display: flex;
  gap: 12px;
  padding: 4px;

  @media (max-width: 768px) {
    gap: 8px;
  }
}

.thumbnail {
  position: relative;
  flex-shrink: 0;
  width: 180px;
  height: 135px; /* Changed to maintain 4:3 ratio (180 * 0.75) */
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #000;
  padding: 0;

  @media (max-width: 768px) {
    width: 120px;
    height: 90px; /* Maintain 4:3 ratio (120 * 0.75) */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .thumbnail-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.1);
    }

    .thumbnail-overlay {
      opacity: 0.6;
    }
  }

  &.active {
    border-color: #0e47a1;
    box-shadow: 0 8px 20px rgba(14, 71, 161, 0.3);

    .thumbnail-overlay {
      opacity: 0;
    }

    img {
      transform: scale(1.05);
    }
  }
}
</style>
