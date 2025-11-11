<template>
  <div class="vat-section-wrapper">
    <div class="vat-section-container">
      <div class="notice-cards">
        <div class="notice-card vat-notice">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Wszystkie podane ceny są cenami netto – do których należy doliczyć podatek VAT 23%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vat-section-wrapper {
  margin-top: 4vh;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.vat-section-container {
  max-width: 1400px;
  margin: 0 auto;
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
  padding: 18px 24px;
  border-radius: 16px;
  font-size: 1rem;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.3);

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
