<template>
  <div class="emergency-bar-wrapper">
    <div class="emergency-bar">
      <div class="emergency-content">
        <!-- Logo absolutnie po lewej -->
        <div class="logo-container">
          <img :src="logo" alt="Chmielewski Transport" class="company-logo" />
        </div>

        <!-- Tekst i przycisk centralnie -->
        <div class="emergency-text">
          <div class="emergency-label">POMOC DROGOWA 24/7</div>
          <a href="tel:+48535255605" class="phone-button" @click="trackCall">
            <div class="phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="phone-content">
              <span class="phone-number">535 255 605</span>
              <span class="phone-cta">Kliknij i zadzwoń</span>
            </div>
            <div class="phone-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from 'assets/logo-chmielewski.svg'

const trackCall = () => {
  console.log('Użytkownik kliknął numer telefonu')
}
</script>

<style lang="scss" scoped>
.emergency-bar-wrapper {
  background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shimmer 3s infinite;
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.emergency-bar {
  max-width: 1400px;
  margin: 0 auto;
  padding: 25px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
}

.emergency-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: auto;
  }
}

// Logo absolutnie po lewej
.logo-container {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: 1024px) {
    // Usuń position: relative - zostaw absolute
    top: 0;
    transform: translateY(0);
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 16px; // usuń to jeśli nie potrzebujesz
  }
}

.company-logo {
  height: 1000px;
  width: auto;
  max-width: 250px;
  object-fit: contain;
  filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));

  @media (max-width: 1024px) {
    height: 100px; // zwiększ tutaj jak potrzebujesz
    max-width: 200px; // i tutaj
  }

  @media (max-width: 480px) {
    height: 90px; // lub więcej
    max-width: 180px;
  }
}

// Dodaj padding-top do emergency-text na mobile, żeby tekst nie nakładał się na logo
.emergency-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
  z-index: 2;

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 110px; // dostosuj do wysokości logo + margines
  }
}

.emergency-label {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.phone-button {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  color: #0d47a1;
  padding: 20px 32px;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(25, 118, 210, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    color: #0d47a1;

    &::before {
      left: 100%;
    }

    .phone-arrow {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1);
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    gap: 12px;
  }
}

.phone-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #1976d2, #0d47a1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.phone-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.phone-number {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.phone-cta {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1976d2;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}

.phone-arrow {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
