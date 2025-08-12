<template>
  <div>
    <section class="loaning-section q-pa-xl">
      <h1 class="text-h4 text-primary text-center q-mb-md">
        Wypożyczalnia lawet, przyczep i busów
      </h1>
      <div class="text-subtitle1 text-center q-mb-xl text-grey-8">
        Nowoczesna flota – elastyczne warunki – atrakcyjne ceny.<br>
        Wszystkie pojazdy i przyczepy regularnie serwisowane i dostępne od ręki!
      </div>

      <!-- Pierwszy rząd: Lawety & Przyczepy -->
      <div class="row q-col-gutter-lg q-mb-xl items-stretch">
        <div class="col-12 col-md-6">
          <q-card flat class="offer-card full-height">
            <div class="offer-header">
              <q-icon name="local_shipping" color="primary" size="md" />
              <span class="offer-title">Lawety <span class="category">(kat. B+E)</span></span>
            </div>
            <ul class="section-ul">
              <li><b>Laweta 4 m</b> – DMC 2000 kg | Ład. 1430 kg | 400x200 cm <span class="price">100 zł / doba</span></li>
              <li><b>Laweta 5 m</b> – DMC 3000 kg | Ład. 2280 kg | 500x210 cm <span class="price">150 zł / doba</span></li>
              <li><b>Laweta na 2 auta</b> – DMC 3500 kg | Ład. 2520 kg | 850x210 cm <span class="price">200 zł / doba</span></li>
              <li class="section-note">Wyposażone w najazdy, pasy, wyciągarki + opcja wynajmu z kierowcą.</li>
            </ul>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card flat class="offer-card full-height">
            <div class="offer-header">
              <q-icon name="trailer" color="primary" size="md" />
              <span class="offer-title">Przyczepy lekkie <span class="category">(kat. B)</span></span>
            </div>
            <ul class="section-ul">
              <li><b>Lekka 1 oś</b> – DMC 750 kg | 242x123x128 cm <span class="price">50 zł / doba</span></li>
              <li><b>Lekka 2 osie</b> – DMC 750 kg | 263x143x149 cm <span class="price">80 zł / doba</span></li>
              <li><b>Lekka duża 2 osie</b> – DMC 750 kg | 340x143x170 cm <span class="price">100 zł / doba</span></li>
              <li><b>Lekka 2 osie bez plandeki</b> – DMC 750 kg | 250x123 cm <span class="price">70 zł / doba</span></li>
              <li class="section-note">Przyczepki z plandeką i bez, dostępne na godziny lub dni.</li>
            </ul>
          </q-card>
        </div>
      </div>

      <!-- Drugi rząd: Busy -->
      <div class="row q-col-gutter-lg q-mb-xl items-stretch">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="offer-card offer-card-bus full-height">
            <div class="offer-header">
              <q-icon name="directions_bus" color="primary" size="md" />
              <span class="offer-title">Bus 9-osobowy</span>
            </div>
            <p>Wyjazdy rodzinne, integracyjne – komfort i bezpieczeństwo.</p>
            <div class="price price-large">od 50 zł / doba</div>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="offer-card offer-card-bus full-height">
            <div class="offer-header">
              <q-icon name="local_shipping" color="primary" size="md" />
              <span class="offer-title">Autolaweta</span>
            </div>
            <p>Transport pojazdów i maszyn – przewozimy na życzenie klienta.</p>
            <div class="price price-large">Ceny ustalane indywidualnie</div>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="offer-card offer-card-bus full-height">
            <div class="offer-header">
              <q-icon name="local_shipping" color="primary" size="md" />
              <span class="offer-title">Bus towarowy</span>
            </div>
            <p>Transport sprzętu, przeprowadzki. Wynajem krótko lub długoterminowy.</p>
            <div class="price price-large">Indywidualna wycena</div>
          </q-card>
        </div>
      </div>

      <!-- Warunki wynajmu -->
      <q-card flat class="warning-box q-mb-lg">
        <div class="offer-header q-mb-sm">
          <q-icon name="info" color="warning" size="19px" />
          <span class="text-bold text-warning">Warunki wynajmu</span>
        </div>
        <ul class="section-ul section-ul-sm">
          <li>Kaucja za przyczepę: <b>200 zł</b></li>
          <li>Kaucja za samochód: <b>1000 zł</b></li>
          <li>Dokument tożsamości i ważne prawo jazdy wymagane przy umowie</li>
        </ul>
      </q-card>

      <!-- Godziny & Info -->
      <div class="open-hours-bar q-pt-lg">
        <q-icon name="access_time" color="secondary" size="18px" class="q-mr-xs" />
        <b>Godziny otwarcia:</b> Poniedziałek – Sobota, 08:00 – 18:00
      </div>
      <div class="update-box q-mt-md text-caption text-grey-7">
        <q-icon name="autorenew" color="primary" size="18px" class="q-mr-xs" spin />
        Dynamicznie poszerzamy ofertę – zapytaj o szczegóły!
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.loaning-section {
  background: #fff;
  border-radius: 19px;
  box-shadow: 0 2px 22px rgba(9, 54, 138, 0.08);
  margin: 40px auto 0 auto;
  max-width: 1500px;
}

.offer-card {
  background: #fefefe;
  border-radius: 13px;
  box-shadow: 0 4px 12px rgba(24, 103, 192, 0.08);
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.full-height {
  height: 100%;
}

.offer-header {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 14px;
}

.offer-title {
  font-weight: 700;
  color: #0e47a1;
}

.category {
  font-weight: 400;
  color: #888;
  font-size: 0.9rem;
}

.section-ul {
  padding-left: 18px;
  margin: 0;
  font-size: 1rem;
  color: #234;
  line-height: 1.65;
}
.section-ul-sm {
  font-size: 0.95rem;
}
.section-ul li {
  margin-bottom: 6px;
}

.section-note {
  color: #1565c0;
  font-size: 0.92em;
  margin-top: 3px;
}

.price {
  color: #c5a200;
  font-weight: 700;
}
.price-large {
  font-size: 1.1rem;
  margin-top: auto;
}

.warning-box {
  background: #fffde7;
  border-left: 5px solid #fff176;
  border-radius: 12px;
  padding: 17px 20px 11px 20px;
}

.open-hours-bar {
  font-size: 1.1rem;
  color: #0e47a1;
}
.update-box {
  display: flex;
  align-items: center;
}
</style>
