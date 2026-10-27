<template>
  <div class="map-section-wrapper">
    <div class="map-container">
      <div class="map-header">
        <div class="map-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <div>
          <h2 class="map-title">Nasza lokalizacja</h2>
          <p class="map-subtitle">Zalesie 15<br/>77-121 Pomysk Wielki</p>
        </div>
      </div>

      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.6022670659586!2d17.532316877112592!3d54.20482611014443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47020800fcb6019d%3A0xfb1f9a25176d56f2!2sZalesie%2015%2C%2077-121%20Pomysk%20Wielki!5e0!3m2!1spl!2spl!4v1765912961202!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa Google - FM Chmielewski Laweta Bytów">
        </iframe>
      </div>

      <div class="map-info">
        <div class="info-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div>
            <div class="info-label">Godziny</div>
            <div class="info-value">Pon-Sob: 08:00-18:00</div>
          </div>
        </div>
        <a href="tel:+48535255605" class="info-card info-card-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2"/>
          </svg>
          <div>
            <div class="info-label">Telefon</div>
            <div class="info-value">535 255 605</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-section-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.map-container {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    padding: 24px 20px;
    border-radius: 20px;
  }
}

.map-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 20px;
  }
}

.map-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #1976d2, #0d47a1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
}

.map-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0e47a1;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.map-subtitle {
  font-size: 1rem;
  color: #666;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
}

.map-wrapper {
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  position: relative;

  iframe {
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    display: block;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
}

.map-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
    color: #1976d2;
  }

  &.info-card-link {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
      border-color: #1976d2;
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(25, 118, 210, 0.15);
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
}

.info-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 4px;
}

.info-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0e47a1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>
