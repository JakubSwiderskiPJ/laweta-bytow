<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-content">
      <div class="cookie-text">
        <h3>🍪 Używamy plików cookies</h3>
        <p>
          Ta strona używa plików cookies w celu zapewnienia najlepszego doświadczenia.
          Możesz zarządzać swoimi preferencjami poniżej.
        </p>
      </div>

      <div v-if="!showSettings" class="cookie-buttons">
        <button @click="acceptAll" class="btn-accept">
          Akceptuj wszystkie
        </button>
        <button @click="rejectAll" class="btn-reject">
          Tylko niezbędne
        </button>
        <button @click="showSettings = true" class="btn-settings">
          Ustawienia
        </button>
      </div>

      <div v-else class="cookie-settings">
        <div class="cookie-option">
          <label>
            <input type="checkbox" disabled checked />
            <span class="cookie-label">
              <strong>Niezbędne</strong>
              <small>Wymagane do prawidłowego działania strony</small>
            </span>
          </label>
        </div>

        <div class="cookie-option">
          <label>
            <input type="checkbox" v-model="preferences.analytics" />
            <span class="cookie-label">
              <strong>Analityczne</strong>
              <small>Pomagają nam zrozumieć jak korzystasz ze strony</small>
            </span>
          </label>
        </div>

        <div class="cookie-option">
          <label>
            <input type="checkbox" v-model="preferences.functional" />
            <span class="cookie-label">
              <strong>Funkcjonalne</strong>
              <small>Zapamiętują Twoje preferencje</small>
            </span>
          </label>
        </div>

        <div class="cookie-buttons">
          <button @click="savePreferences" class="btn-accept">
            Zapisz preferencje
          </button>
          <button @click="showSettings = false" class="btn-settings">
            Wróć
          </button>
        </div>
      </div>

      <div class="cookie-footer">
        <button @click="openPrivacyPolicy" class="privacy-link">
          Polityka prywatności
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',

  emits: ['open-privacy-policy'],

  data() {
    return {
      showBanner: false,
      showSettings: false,
      preferences: {
        analytics: false,
        functional: false
      }
    }
  },

  mounted() {
    // Sprawdź czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      this.showBanner = true;
    } else {
      // Załaduj zapisane preferencje
      const saved = JSON.parse(consent);
      this.preferences = saved;
      this.updateConsent(saved);
    }
  },

  methods: {
    openPrivacyPolicy() {
      this.$emit('open-privacy-policy');
    },

    acceptAll() {
      this.preferences = {
        analytics: true,
        functional: true
      };
      this.saveConsent();
    },

    rejectAll() {
      this.preferences = {
        analytics: false,
        functional: false
      };
      this.saveConsent();
    },

    savePreferences() {
      this.saveConsent();
    },

    saveConsent() {
      localStorage.setItem('cookie_consent', JSON.stringify(this.preferences));

      this.updateConsent(this.preferences);

      this.showBanner = false;
      this.showSettings = false;

      window.location.reload();
    },

    updateConsent(preferences) {
      // Google Consent Mode v2
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'functionality_storage': preferences.functional ? 'granted' : 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });

      if (preferences.analytics) {
        this.loadGTM();
      }
    },

    loadGTM() {
      if (window.gtmLoaded) return;

      // Google Tag Manager
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TT3NTTFQ');

      window.gtmLoaded = true;
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  padding: 20px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
  z-index: 9999;
  animation: slideUp 0.3s ease-out;
  border-top: 3px solid #1976d2;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
}

.cookie-text h3 {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  color: #ffffff;
}

.cookie-text p {
  margin: 0 0 20px 0;
  font-size: 0.95rem;
  color: #cccccc;
  line-height: 1.5;
}

.cookie-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.cookie-buttons button {
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-accept {
  background: #1976d2;
  color: white;
}

.btn-accept:hover {
  background: #42a5f5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px #0d47a1;
}

.btn-reject {
  background: #444444;
  color: white;
}

.btn-reject:hover {
  background: #555555;
}

.btn-settings {
  background: transparent;
  color: white;
  border: 2px solid #666666;
}

.btn-settings:hover {
  border-color: #1976d2;
  color: #1976d2;
}

.cookie-settings {
  margin-bottom: 15px;
}

.cookie-option {
  margin-bottom: 15px;
}

.cookie-option label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 12px;
}

.cookie-option input[type="checkbox"] {
  margin-top: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #1976d2;
}

.cookie-option input[type="checkbox"]:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.cookie-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cookie-label strong {
  font-size: 1rem;
  color: #ffffff;
}

.cookie-label small {
  font-size: 0.85rem;
  color: #aaaaaa;
}

.cookie-footer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #444444;
}

.cookie-footer a {
  color: #1976d2;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.cookie-footer a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.privacy-link {
  background: none;
  border: none;
  color: #1976d2;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: inherit;
  padding: 0;
}

.privacy-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .cookie-banner {
    padding: 15px;
  }

  .cookie-text h3 {
    font-size: 1.1rem;
  }

  .cookie-text p {
    font-size: 0.9rem;
  }

  .cookie-buttons {
    flex-direction: column;
  }

  .cookie-buttons button {
    width: 100%;
  }
}
</style>
