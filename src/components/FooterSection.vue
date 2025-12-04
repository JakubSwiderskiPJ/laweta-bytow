  <template>
    <footer class="modern-footer">
      <div class="footer-container">
        <div class="footer-content">

          <!-- Kolumna 1: Logo + opis -->
          <div class="footer-column">
            <div class="footer-logo">
              <div class="logo-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" stroke="currentColor" stroke-width="2"/>
                  <path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3 class="logo-text">Laweta-Bytów</h3>
            </div>
            <p class="footer-description">
              Całodobowa pomoc drogowa, transport pojazdów i wynajem lawet, przyczep oraz busów – Bytów i okolice.
            </p>
            <button @click="openPrivacyPolicy" class="privacy-link">
            Polityka prywatności
          </button>
          </div>

  <!-- Kolumna 2: Facebook -->
  <div class="footer-column">
    <h4 class="column-title">Znajdź nas na Facebooku</h4>
    <a href="https://www.facebook.com/pomocdrogowabytow" target="_blank" rel="noopener noreferrer" class="facebook-button">
      <div class="facebook-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>
      <div class="facebook-content">
        <div class="facebook-title">Laweta Bytów</div>
        <div class="facebook-subtitle">Odwiedź naszą stronę</div>
      </div>
    </a>
  </div>

          <!-- Kolumna 3: Kontakt -->
          <div class="footer-column">
            <h4 class="column-title">Kontakt</h4>
            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>Zalesie 15
  77-121 Pomysk Wielki</span>
              </div>

              <a href="tel:+48535255605" class="contact-item contact-item-link">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>+48 535 255 605</span>
              </a>

              <a href="mailto:fmchmielewski@gmail.com" class="contact-item contact-item-link">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>fmchmielewski@gmail.com</span>
              </a>
            </div>
          </div>

          <!-- Kolumna 4: Godziny pracy -->
          <div class="footer-column">
            <h4 class="column-title">Godziny otwarcia</h4>
            <div class="hours-box">
              <div class="hours-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div>
                  <div class="hours-label">Wypożyczalnia</div>
                  <div class="hours-time">Pon – Sob: 08:00 – 18:00</div>
                </div>
              </div>
              <div class="hours-item hours-24-7">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div>
                  <div class="hours-label">Pomoc drogowa</div>
                  <div class="hours-time-highlight">24/7/365</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Dolny pasek -->
        <div class="footer-bottom">
          <p class="copyright">
            © {{ new Date().getFullYear() }} Laweta-Bytów. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  </template>

  <script setup>

  </script>

  <style scoped lang="scss">
  .modern-footer {
    background: linear-gradient(135deg, #0a3d8f 0%, #0d47a1 100%);
    color: white;
    margin-top: 60px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #42a5f5, #1976d2, #0d47a1, #1976d2, #42a5f5);
      background-size: 200% 100%;
      animation: shimmer 3s linear infinite;
    }

    @media (max-width: 768px) {
      margin-top: 40px;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 20px 20px;

    @media (max-width: 768px) {
      padding: 40px 16px 16px;
    }
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  .footer-column {
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    backdrop-filter: blur(10px);
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: white;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .footer-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  .column-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 20px 0;
    color: white;
    position: relative;
    padding-bottom: 8px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #42a5f5, transparent);
      border-radius: 2px;
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    svg {
      flex-shrink: 0;
      color: #42a5f5;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(66, 165, 245, 0.5);
      transform: translateX(4px);
      color: white;
    }
  }

  .contact-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    line-height: 1.5;

    &.contact-item-link {
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 8px;
      margin: -8px;
      border-radius: 8px;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        color: white;

        .contact-icon {
          background: rgba(66, 165, 245, 0.3);
        }
      }
    }
  }

  .contact-icon {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42a5f5;
    transition: all 0.3s ease;
  }

  .hours-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .hours-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    svg {
      flex-shrink: 0;
      color: #42a5f5;
      margin-top: 2px;
    }

    &.hours-24-7 {
      background: linear-gradient(135deg, rgba(66, 165, 245, 0.2), rgba(25, 118, 210, 0.2));
      border-color: rgba(66, 165, 245, 0.3);
    }
  }

  .hours-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 4px;
  }

  .hours-time {
    font-size: 0.95rem;
    font-weight: 600;
    color: white;
  }

  .hours-time-highlight {
    font-size: 1.1rem;
    font-weight: 700;
    color: #42a5f5;
    text-shadow: 0 0 10px rgba(66, 165, 245, 0.5);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 24px;
    margin-top: 40px;
  }

  .copyright {
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  .facebook-button {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(66, 103, 178, 0.3);

    &:hover {
      background: #4267B2;
      border-color: #4267B2;
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(66, 103, 178, 0.3);
      color: white;
    }
  }

  .facebook-icon {
    width: 48px;
    height: 48px;
    background: #4267B2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  .facebook-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .facebook-title {
    font-size: 1.1rem;
    font-weight: 700;
  }

  .facebook-subtitle {
    font-size: 0.85rem;
    opacity: 0.8;
  }
  </style>
