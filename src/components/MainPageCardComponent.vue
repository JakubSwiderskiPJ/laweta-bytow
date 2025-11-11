<template>
  <div class="main-card-wrapper">
    <div class="main-card">
      <!-- Hero Header -->
      <div class="header-section">
        <div class="icon-wrapper">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" class="header-icon">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h1 class="main-title">
          Oferujemy kompleksową<br>pomoc drogową
        </h1>
        <p class="subtitle">Profesjonalnie, szybko i bezpiecznie – 24/7/365</p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <div
          ref="serviceCard1"
          class="service-card animate-on-scroll"
          :class="{ 'is-visible': visibleCards.card1 }"
        >
          <div class="service-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" stroke="currentColor" stroke-width="2"/>
              <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3>Pomoc drogowa</h3>
          <p>Kompleksowa pomoc na terenie Bytowa, okolic i całej Europy</p>
        </div>

        <div
          ref="serviceCard2"
          class="service-card animate-on-scroll"
          :class="{ 'is-visible': visibleCards.card2 }"
        >
          <div class="service-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" stroke-width="2"/>
              <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3>Transport do 16 ton</h3>
          <p>Samochody osobowe, ciężarowe, maszyny budowlane i ładunki ponadgabarytowe</p>
        </div>

        <div
          ref="serviceCard3"
          class="service-card animate-on-scroll"
          :class="{ 'is-visible': visibleCards.card3 }"
        >
          <div class="service-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3>Licencje i ubezpieczenia</h3>
          <p>Międzynarodowa licencja, zezwolenia oraz pełne ubezpieczenie OCP</p>
        </div>
      </div>

      <!-- Main Description -->
      <div class="description-section">
        <p class="description-text">
          Dysponujemy <strong>specjalistycznym sprzętem o ładowności do 16 ton</strong>, co pozwala nam
          holować samochody osobowe, ciężarowe, maszyny budowlane i ładunki ponadgabarytowe.
        </p>
        <p class="description-text">
          <strong>Wyspecjalizowana załoga</strong> to doświadczeni kierowcy i operatorzy z odpowiednimi
          kwalifikacjami, zaangażowani w każde zlecenie.
        </p>
      </div>

      <!-- Features List -->
      <div class="features-list">
        <div class="feature-item">
          <div class="check-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
          <span>Licencja międzynarodowa</span>
        </div>
        <div class="feature-item">
          <div class="check-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
          <span>Zezwolenia na przewóz ładunków ponadgabarytowych</span>
        </div>
        <div class="feature-item">
          <div class="check-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
          <span>Ubezpieczenie przewoźnika drogowego (OCP)</span>
        </div>
        <div class="feature-item">
          <div class="check-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
          <span>Doświadczeni kierowcy i operatorzy</span>
        </div>
      </div>

      <!-- CTA Emergency Box -->
      <div class="emergency-box">
        <div class="emergency-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="emergency-content">
          <h2 class="emergency-title">Działamy 24/7/365</h2>
          <p class="emergency-text">
            Także w święta i w nocy. Zadzwoń, a sprawnie i bezpiecznie pomożemy Ci wrócić na drogę!
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const serviceCard1 = ref(null)
const serviceCard2 = ref(null)
const serviceCard3 = ref(null)

const visibleCards = ref({
  card1: false,
  card2: false,
  card3: false
})

let observer = null

onMounted(() => {
  // Opcje dla Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // 20% karty musi być widoczne
  }

  // Callback wywoływany gdy karta wchodzi/wychodzi z viewport
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Określ która karta jest widoczna
        if (entry.target === serviceCard1.value) {
          visibleCards.value.card1 = true
        } else if (entry.target === serviceCard2.value) {
          visibleCards.value.card2 = true
        } else if (entry.target === serviceCard3.value) {
          visibleCards.value.card3 = true
        }
      }
    })
  }

  // Stwórz observer
  observer = new IntersectionObserver(callback, options)

  // Obserwuj wszystkie karty
  if (serviceCard1.value) observer.observe(serviceCard1.value)
  if (serviceCard2.value) observer.observe(serviceCard2.value)
  if (serviceCard3.value) observer.observe(serviceCard3.value)
})

onUnmounted(() => {
  // Wyczyść observer przy odmontowaniu
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped lang="scss">
.main-card-wrapper {
  max-width: 1400px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    margin: 40px auto;
  }

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 0 16px;
  }
}

.main-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  padding: 60px;
  border: 3px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 20px;
  }
}

.header-section {
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1976d2, #0d47a1);
  border-radius: 20px;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(14, 71, 161, 0.2);

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }
}

.header-icon {
  color: white;

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0e47a1;
  line-height: 1.2;
  margin: 0 0 16px 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 12px;
  }
}

.subtitle {
  font-size: 1.25rem;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
}

.service-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 32px 24px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(14, 71, 161, 0.15);
    border-color: #1976d2;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
}

// Animacja wyskakiwania dla mobile
.animate-on-scroll {
  @media (max-width: 1024px) {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

    &.is-visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    // Opóźnienia dla efektu kaskadowego
    &:nth-child(1).is-visible {
      transition-delay: 0.1s;
    }

    &:nth-child(2).is-visible {
      transition-delay: 0.2s;
    }

    &:nth-child(3).is-visible {
      transition-delay: 0.3s;
    }
  }
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  color: #1976d2;
  box-shadow: 0 4px 12px rgba(14, 71, 161, 0.1);

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0e47a1;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.service-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
}

.description-section {
  margin-bottom: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 30px;
  }
}

.description-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: center;

  strong {
    color: #0e47a1;
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }
}

.features-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin-bottom: 40px;
    gap: 12px;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
}

.check-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: #e3f2fd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}

.emergency-box {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  padding: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 32px;
  box-shadow: 0 12px 40px rgba(14, 71, 161, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 32px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    gap: 20px;
  }
}

.emergency-icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
}

.emergency-content {
  flex: 1;
  color: white;

  @media (max-width: 1024px) {
    text-align: center;
  }
}

.emergency-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
}

.emergency-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
.notice-card {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 24px;
  border-radius: 16px;
  font-size: 1rem;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 14px 16px;
  }
}
.vat-notice {
  border-left: 5px solid #ffc107;

  svg {
    color: #ffc107;
  }

  span {
    color: #555;
    font-weight: 500;
  }
}
</style>
