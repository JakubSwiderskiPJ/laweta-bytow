<template>
  <div>
    <LoaningGallery />

    <section class="rental-section">
      <!-- Hero Header -->
      <div class="hero-header">
        <div class="icon-badge">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" stroke="currentColor" stroke-width="2"/>
            <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <h1 class="hero-title">Wypożyczalnia lawet, przyczep i busów</h1>
        <p class="hero-subtitle">
          Nowoczesna flota • Elastyczne warunki • Atrakcyjne ceny<br>
          Wszystkie pojazdy i przyczepy regularnie serwisowane i dostępne od ręki!
        </p>
      </div>

      <!-- Rental Categories -->
      <div class="categories-grid">
        <!-- Lawety -->
        <div class="category-card">
          <div class="category-header">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" stroke="currentColor" stroke-width="2"/>
                <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div>
              <h2 class="category-title">Lawety</h2>
              <span class="category-badge">kat. B+E</span>
            </div>
          </div>

          <div class="items-list">
            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Laweta 4 m</h3>
                <div class="item-price">100 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 2000 kg</span>
                <span class="spec-tag">Ład. 1430 kg</span>
                <span class="spec-tag">400×200 cm</span>
              </div>
            </div>

            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Laweta 5 m</h3>
                <div class="item-price">150 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 3000 kg</span>
                <span class="spec-tag">Ład. 2280 kg</span>
                <span class="spec-tag">500×210 cm</span>
              </div>
            </div>

            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Laweta na 2 auta</h3>
                <div class="item-price">200 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 3500 kg</span>
                <span class="spec-tag">Ład. 2520 kg</span>
                <span class="spec-tag">850×210 cm</span>
              </div>
            </div>
          </div>

          <div class="category-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            Wyposażone w najazdy i wyciągarki
          </div>
        </div>

        <!-- Przyczepy -->
        <div class="category-card">
          <div class="category-header">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" stroke-width="2"/>
                <circle cx="7" cy="17" r="2" stroke="currentColor" stroke-width="2"/>
                <circle cx="17" cy="17" r="2" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div>
              <h2 class="category-title">Przyczepy lekkie</h2>
              <span class="category-badge">kat. B</span>
            </div>
          </div>

          <div class="items-list">
            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Lekka 1 oś</h3>
                <div class="item-price">50 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 750 kg</span>
                <span class="spec-tag">242×123×128 cm</span>
              </div>
            </div>

            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Lekka 2 osie</h3>
                <div class="item-price">80 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 750 kg</span>
                <span class="spec-tag">263×143×149 cm</span>
              </div>
            </div>

            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Lekka duża 2 osie</h3>
                <div class="item-price">100 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 750 kg</span>
                <span class="spec-tag">340×143×170 cm</span>
              </div>
            </div>

            <div class="rental-item">
              <div class="item-header">
                <h3 class="item-name">Lekka 2 osie bez plandeki</h3>
                <div class="item-price">70 zł<span>/doba</span></div>
              </div>
              <div class="item-specs">
                <span class="spec-tag">DMC 750 kg</span>
                <span class="spec-tag">250×123 cm</span>
              </div>
            </div>
          </div>

          <div class="category-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Przyczepki dostępne wyłącznie na doby
          </div>
        </div>
      </div>

      <!-- Vehicles Grid -->
      <div class="vehicles-grid">
        <div class="vehicle-card">
          <div class="vehicle-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M4 16h16M4 16v4m16-4v4M4 16l2-8h12l2 8" stroke="currentColor" stroke-width="2"/>
              <path d="M7 16v-3M17 16v-3" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="vehicle-title">Bus 9-osobowy</h3>
          <p class="vehicle-desc">Wyjazdy rodzinne, integracyjne – komfort i bezpieczeństwo</p>
          <div class="vehicle-price">Ceny ustalane indywidualnie</div>
        </div>

        <div class="vehicle-card">
          <div class="vehicle-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" stroke="currentColor" stroke-width="2"/>
              <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="vehicle-title">Autolaweta</h3>
          <p class="vehicle-desc">Transport pojazdów i maszyn</p>
          <div class="vehicle-price">Ceny ustalane indywidualnie</div>
        </div>

        <div class="vehicle-card">
          <div class="vehicle-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M7 17h10M3 10h18" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="vehicle-title">Bus towarowy</h3>
          <p class="vehicle-desc">Transport sprzętu, przeprowadzki. Wynajem krótko lub długoterminowy</p>
          <div class="vehicle-price">Ceny ustalane indywidualnie</div>
        </div>
      </div>

      <!-- Rental Conditions -->
      <div class="info-cards">
        <div class="info-card warning-card">
          <div class="info-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <h3>Warunki wynajmu</h3>
          </div>
          <ul class="info-list">
            <li><strong>Kaucja za przyczepę:</strong> 200 zł</li>
            <li><strong>Kaucja za samochód:</strong> 1000 zł</li>
            <li>Dokument tożsamości i ważne prawo jazdy wymagane przy umowie</li>
          </ul>
        </div>

        <div class="info-card hours-card">
          <div class="info-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <h3>Godziny otwarcia</h3>
          </div>
          <p class="hours-text">
            <strong>Poniedziałek – Sobota</strong><br>
            08:00 – 18:00
          </p>
        </div>
      </div>

      <!-- Bottom Notices -->
      <div class="notice-cards">
        <div class="notice-card primary-notice">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v20M17 12H7M20 7l-8 8-8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Dynamicznie poszerzamy ofertę – zapytaj o szczegóły!</span>
        </div>

        <div class="notice-card vat-notice">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Wszystkie podane ceny są cenami netto – do których należy doliczyć podatek VAT 23%</span>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from 'components/FooterSection.vue'
import LoaningGallery from 'components/LoaningGallery.vue'
</script>

<style scoped lang="scss">
.rental-section {
  max-width: 100%;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 0 16px;
  }
}

.hero-header {
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.icon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1976d2, #0d47a1);
  border-radius: 20px;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(14, 71, 161, 0.2);
  color: white;

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0e47a1;
  margin: 0 0 16px 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.category-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(14, 71, 161, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(14, 71, 161, 0.15);
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.category-icon {
  width: 56px;
  height: 56px;
  background: #e3f2fd;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0e47a1;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.category-badge {
  display: inline-block;
  padding: 4px 12px;
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.rental-item {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
    transform: translateX(4px);
  }
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
}

.item-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.item-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #c5a200;

  span {
    font-size: 0.85rem;
    font-weight: 500;
    color: #999;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.item-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.spec-tag {
  display: inline-block;
  padding: 4px 12px;
  background: white;
  color: #666;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 3px 10px;
  }
}

.category-note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #e3f2fd;
  border-radius: 10px;
  color: #1976d2;
  font-size: 0.95rem;
  font-weight: 500;

  svg {
    flex-shrink: 0;
    color: #1976d2;
  }
}

.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.vehicle-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(14, 71, 161, 0.15);
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
}

.vehicle-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  box-shadow: 0 4px 12px rgba(14, 71, 161, 0.1);

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
}

.vehicle-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0e47a1;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.vehicle-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px 0;
  min-height: 48px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    min-height: auto;
  }
}

.vehicle-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.info-card {
  border-radius: 16px;
  padding: 28px;

  @media (max-width: 768px) {
    padding: 20px;
  }
}

.warning-card {
  background: #fff8e1;
  border-left: 5px solid #ffc107;
}

.hours-card {
  background: #e3f2fd;
  border-left: 5px solid #1976d2;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: #333;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  svg {
    flex-shrink: 0;
  }
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 8px 0;
    color: #555;
    font-size: 1rem;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    strong {
      color: #333;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
}

.hours-text {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin: 0;

  strong {
    color: #1976d2;
    font-weight: 700;
    font-size: 1.15rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.notice-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.notice-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 1rem;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 14px 16px;
  }
}

.primary-notice {
  background: #e3f2fd;
  color: #1976d2;
  border-left: 4px solid #1976d2;

  svg {
    color: #1976d2;
  }
}

.vat-notice {
  background: #f8f9fa;
  color: #555;
  border-left: 4px solid #0e47a1;

  svg {
    color: #0e47a1;
  }

  span {
    font-weight: 500;
  }
}
</style>
