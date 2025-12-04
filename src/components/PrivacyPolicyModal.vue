<template>
  <q-dialog v-model="isOpen" maximized>
    <q-card class="privacy-policy-modal">
      <q-bar class="bg-red text-white">
        <q-space />
        <div class="text-h6">Polityka Prywatności</div>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip>Zamknij</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="scroll-container">
        <div class="privacy-content">
          <p class="updated">Ostatnia aktualizacja: {{ currentDate }}</p>

          <section>
            <p>
              Niniejsza Polityka prywatności opisuje zasady przetwarzania danych osobowych przez firmę
              FM Chmielewski Firma Wielobranżowa Filip Chmielewski w związku z korzystaniem ze strony internetowej
              oraz usług firmy.
            </p>
          </section>

          <section>
            <h2>1. Administrator danych osobowych</h2>
            <p>Administratorem danych osobowych jest:</p>
            <div class="info-box">
              <p><strong>FM Chmielewski Firma Wielobranżowa Filip Chmielewski</strong></p>
              <p>ul. Zalesie 15, 77-121 Pomysk Wielki</p>
              <p>📧 e-mail: fmchmielewski@gmail.com</p>
            </div>
          </section>

          <section>
            <h2>2. Zakres przetwarzanych danych</h2>
            <p>W ramach korzystania ze strony mogą być przetwarzane:</p>
            <ul>
              <li>dane techniczne dotyczące wizyty na stronie (adres IP, rodzaj urządzenia, przeglądarka itp.),</li>
              <li>dane zbierane przez pliki cookies, Google Tag Manager i Google Analytics.</li>
            </ul>
            <p>
              Nie stosujemy formularza kontaktowego — kontakt odbywa się wyłącznie mailowo lub telefonicznie,
              dlatego dane podane podczas kontaktu są przetwarzane wyłącznie w celu obsługi zapytania lub realizacji usługi.
            </p>
          </section>

          <section>
            <h2>3. Cele i podstawy prawne przetwarzania danych</h2>
            <p>Dane przetwarzane są w następujących celach:</p>

            <h3>a) Realizacja usług pomocy drogowej oraz obsługa zapytań</h3>
            <p><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. b RODO (wykonanie umowy lub działania przed zawarciem umowy).</p>

            <h3>b) Wypełnienie obowiązków księgowych, podatkowych i prawnych</h3>
            <p><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. c RODO (obowiązek prawny).</p>

            <h3>c) Statystyka i analiza działania strony (Google Analytics)</h3>
            <p><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. a RODO (zgoda użytkownika, wyrażana poprzez baner cookies).</p>

            <h3>d) Utrzymanie prawidłowego funkcjonowania strony (cookies techniczne)</h3>
            <p><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).</p>
          </section>

          <section>
            <h2>4. Pliki cookies</h2>
            <p>Strona używa plików cookies w celu:</p>
            <ul>
              <li>zapewnienia prawidłowego działania strony,</li>
              <li>tworzenia statystyk (Google Analytics),</li>
              <li>dostosowania treści do preferencji użytkownika.</li>
            </ul>

            <p>
              <strong>Strona korzysta z mechanizmu Google Consent Mode v2</strong>, który respektuje wybory użytkownika
              dotyczące zgód na cookies.
            </p>

            <p>
              Cookies można wyłączyć w ustawieniach przeglądarki lub poprzez banner cookies na stronie,
              jednak może to wpłynąć na prawidłowe funkcjonowanie strony.
            </p>

            <div class="cookie-type">
              <h4>🔹 Rodzaje cookies używanych na stronie:</h4>

              <div style="margin-top: 15px;">
                <strong>Cookies niezbędne</strong>
                <p>Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.</p>
                <ul>
                  <li><strong>cookie_consent</strong> - przechowuje Twoje preferencje dotyczące cookies</li>
                </ul>
              </div>

              <div style="margin-top: 15px;">
                <strong>Cookies analityczne (Google Analytics)</strong>
                <p>Pomagają nam zrozumieć, jak korzystasz ze strony.</p>
                <ul>
                  <li><strong>_ga</strong> - identyfikuje unikalnych użytkowników (ważność: 2 lata)</li>
                  <li><strong>_ga_*</strong> - przechowuje informacje o sesji (ważność: 2 lata)</li>
                  <li><strong>_gid</strong> - rozróżnia użytkowników (ważność: 24 godziny)</li>
                </ul>
              </div>

              <div style="margin-top: 15px;">
                <strong>Cookies funkcjonalne</strong>
                <p>Zapamiętują Twoje preferencje (np. język strony).</p>
              </div>
            </div>

            <h3>Jak zarządzać cookies?</h3>
            <p>Możesz w każdej chwili zmienić ustawienia cookies:</p>
            <ul>
              <li>Klikając przycisk "Ustawienia cookies" w bannerze na dole strony</li>
              <li>W ustawieniach swojej przeglądarki:
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop" target="_blank" rel="noopener">Firefox</a></li>
                  <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
                  <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Google Analytics i Google Tag Manager</h2>
            <p>Strona korzysta z:</p>
            <ul>
              <li><strong>Google Tag Manager (GTM)</strong> – narzędzia do zarządzania tagami analitycznymi,</li>
              <li><strong>Google Analytics 4 (GA4)</strong> – narzędzia analitycznego Google LLC.</li>
            </ul>

            <p>Informacje gromadzone przez Google Analytics mogą obejmować m.in.:</p>
            <ul>
              <li>adres IP (anonimizowany),</li>
              <li>informacje o urządzeniu,</li>
              <li>czas wizyty i przeglądane podstrony.</li>
            </ul>

            <p>
              Google może przetwarzać dane na swoich serwerach (również poza UE), z zachowaniem odpowiednich
              zabezpieczeń zgodnych z RODO.
            </p>

            <div class="info-box">
              <p><strong>Dostawca:</strong> Google LLC, USA</p>
              <p><strong>Więcej informacji:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Polityka prywatności Google</a></p>
            </div>
          </section>

          <section>
            <h2>6. Odbiorcy danych</h2>
            <p>Dane mogą być udostępniane:</p>
            <ul>
              <li>firmom świadczącym usługi hostingowe i IT,</li>
              <li>firmom księgowym współpracującym z Administratorem,</li>
              <li>Google LLC (w zakresie korzystania z Google Analytics i Google Tag Manager),</li>
              <li>organom państwowym — wyłącznie w sytuacjach wymaganych przepisami prawa.</li>
            </ul>
            <p><strong>Nie sprzedajemy Twoich danych osobowych osobom trzecim.</strong></p>
          </section>

          <section>
            <h2>7. Okres przechowywania danych</h2>
            <p>Dane przetwarzane będą przez:</p>
            <ul>
              <li>czas realizacji usługi oraz okres przedawnienia roszczeń (maks. 6 lat),</li>
              <li>dane analityczne Google Analytics – zgodnie z ustawieniami narzędzia (zwykle 14 miesięcy),</li>
              <li>dane księgowe – przez okres wymagany przepisami (najczęściej 5 lat).</li>
            </ul>
          </section>

          <section>
            <h2>8. Prawa użytkownika</h2>
            <p>Osobie, której dane dotyczą, przysługuje prawo do:</p>
            <ul>
              <li>✅ <strong>dostępu do danych</strong> - możesz poprosić o kopię przetwarzanych danych,</li>
              <li>✅ <strong>sprostowania danych</strong> - możesz poprawić nieprawidłowe dane,</li>
              <li>✅ <strong>usunięcia danych</strong> („prawo do bycia zapomnianym"),</li>
              <li>✅ <strong>ograniczenia przetwarzania</strong> - możesz zażądać wstrzymania przetwarzania,</li>
              <li>✅ <strong>przeniesienia danych</strong> - możesz otrzymać dane w formacie umożliwiającym przeniesienie,</li>
              <li>✅ <strong>wniesienia sprzeciwu wobec przetwarzania</strong>,</li>
              <li>✅ <strong>wycofania zgody</strong> (jeśli była udzielona) - w dowolnym momencie,</li>
              <li>✅ <strong>złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO)</strong> - <a href="https://www.uodo.gov.pl" target="_blank" rel="noopener">www.uodo.gov.pl</a></li>
            </ul>
            <p>Aby skorzystać z powyższych praw, skontaktuj się z nami: <strong>fmchmielewski@gmail.com</strong></p>
          </section>

          <section>
            <h2>9. Dobrowolność podania danych</h2>
            <p>
              Podanie danych jest dobrowolne, lecz w niektórych przypadkach konieczne do realizacji usługi lub kontaktu.
            </p>
          </section>

          <section>
            <h2>10. Zmiany w polityce prywatności</h2>
            <p>
              Polityka może być aktualizowana w celu dostosowania do zmian w prawie lub sposobie działania strony.
              Aktualna wersja zawsze znajduje się na stronie internetowej.
            </p>
            <p><strong>Data ostatniej aktualizacji:</strong> {{ currentDate }}</p>
          </section>

          <section>
            <h2>11. Kontakt</h2>
            <p>Jeśli masz pytania dotyczące przetwarzania danych osobowych, skontaktuj się z nami:</p>
            <div class="info-box">
              <p><strong>FM Chmielewski Firma Wielobranżowa Filip Chmielewski</strong></p>
              <p>📍 ul. Zalesie 15, 77-121 Pomysk Wielki</p>
              <p>📧 e-mail: <strong>fmchmielewski@gmail.com</strong></p>
            </div>
          </section>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'

const isOpen = defineModel({ type: Boolean, default: false })

const currentDate = computed(() => {
  return new Date().toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.privacy-policy-modal {
  background: #1a1a1a;
  color: #ffffff;
}

.scroll-container {
  max-height: calc(100vh - 50px);
  overflow-y: auto;
}

.privacy-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.8;
}

.updated {
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 30px;
  font-style: italic;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.8rem;
  color: #C41E3A;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #C41E3A;
  padding-bottom: 10px;
}

h3 {
  font-size: 1.4rem;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 12px;
}

h4 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 15px;
  color: #dddddd;
}

ul {
  margin: 15px 0;
  padding-left: 25px;
}

li {
  margin-bottom: 10px;
  color: #dddddd;
}

.info-box {
  background: #2d2d2d;
  border-left: 4px solid #C41E3A;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.info-box p {
  margin-bottom: 8px;
}

.cookie-type {
  background: #2d2d2d;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #444444;
}

a {
  color: #C41E3A;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #ffffff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .privacy-content {
    padding: 15px;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  .info-box {
    padding: 15px;
  }
}
</style>
