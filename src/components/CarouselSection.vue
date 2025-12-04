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
    <div class="thumbnail-gallery" ref="thumbnailGallery">
      <div class="thumbnails-container">
        <button
          v-for="(img, index) in images"
          :key="index"
          :ref="el => { if (el) thumbnailRefs[index] = el }"
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
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

import slide2 from 'assets/main-page-images/Filip13.jpg'
import slide4 from 'assets/main-page-images/Filip15.jpg'
import slide5 from 'assets/main-page-images/Filip16.jpg'
import slide6 from 'assets/main-page-images/Filip17.jpg'
import slide8 from 'assets/main-page-images/Filip33.jpg'
import slide9 from 'assets/main-page-images/Filip34.jpg'
import slide11 from 'assets/main-page-images/Filip36.jpg'
import slide12 from 'assets/main-page-images/Filip37.jpg'
import slide13 from 'assets/main-page-images/Filip38.jpg'
import slide14 from 'assets/main-page-images/Filip49.jpg'
import slide15 from 'assets/main-page-images/Filip50.jpg'
import slide19 from 'assets/main-page-images/Filip56.jpg'
import slide20 from 'assets/main-page-images/Filip57.jpg'

// Funkcja do losowego tasowania tablicy
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Oryginalna tablica zdjęć
const originalImages = [
  slide2, slide4, slide5, slide6, slide8, slide9, slide11,
  slide12, slide13, slide14, slide15, slide19, slide20
]

// Wymieszane zdjęcia przy załadowaniu strony
const images = shuffleArray(originalImages)

const activeIndex = ref(0)
const thumbnailGallery = ref(null)
const thumbnailRefs = ref([])
let autoplayInterval = null

// Funkcja do przewijania do aktywnego thumbnaiła
const scrollToActiveThumbnail = () => {
  nextTick(() => {
    const activeThumbnail = thumbnailRefs.value[activeIndex.value]
    const gallery = thumbnailGallery.value

    if (activeThumbnail && gallery) {
      const thumbnailRect = activeThumbnail.getBoundingClientRect()
      const galleryRect = gallery.getBoundingClientRect()

      // Oblicz pozycję do przewinięcia (wyśrodkuj thumbnail)
      const scrollLeft = activeThumbnail.offsetLeft - (gallery.clientWidth / 2) + (thumbnailRect.width / 2)

      // Płynne przewijanie
      gallery.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  })
}

// Autoplay pokazuje LOSOWE zdjęcie (różne od aktualnego)
const nextSlide = () => {
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * images.length)
  } while (newIndex === activeIndex.value && images.length > 1)

  activeIndex.value = newIndex
}

// Poprzednie też losowe (różne od aktualnego)
const prevSlide = () => {
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * images.length)
  } while (newIndex === activeIndex.value && images.length > 1)

  activeIndex.value = newIndex
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

// Watch activeIndex i przewijaj do aktywnego thumbnaiła
watch(activeIndex, () => {
  scrollToActiveThumbnail()
})

onMounted(() => {
  startAutoplay()
  scrollToActiveThumbnail() // Początkowe przewinięcie
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
  padding-bottom: 66.67%; /* 3:2 aspect ratio dla 1200x800 */

  @media (max-width: 768px) {
    padding-bottom: 66.67%; /* Keep 3:2 on mobile too */
  }
}

.main-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  scroll-behavior: smooth; // Dodano dla płynnego przewijania

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
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #000;
  padding: 0;

  @media (max-width: 768px) {
    width: 120px;
    height: 80px;
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
