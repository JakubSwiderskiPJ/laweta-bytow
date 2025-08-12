<template>
  <div class="main-card-wrapper">
    <q-card flat bordered class="main-card q-pa-xl">
      <!-- Nagłówek z ikoną -->
      <div class="header flex flex-center q-mb-md">
        <q-icon name="support_agent" size="48px" color="primary" class="q-mr-md" />
        <h1 class="text-h4 text-primary text-center text-weight-bold">
          Oferujemy kompleksową<br> pomoc drogową
        </h1>
      </div>

      <div class="content">
        <p class="main-desc text-center">
          Nasza firma oferuje <span class="highlight">kompleksową pomoc drogową</span> oraz
          <span class="highlight">usługi transportowe</span> na najwyższym poziomie – Bytów, okolice i cała Europa.
          Dysponujemy <span class="highlight">specjalistycznym sprzętem o ładowności do 16 ton</span>, co pozwala nam
          holować samochody osobowe, ciężarowe, maszyny budowlane i ładunki ponadgabarytowe.
        </p>

        <q-separator spaced />

        <p class="main-desc text-center">
          <span class="highlight">Wyspecjalizowana załoga</span> to doświadczeni kierowcy i operatorzy z odpowiednimi
          kwalifikacjami, zaangażowani w każde zlecenie.
        </p>

        <q-separator spaced />

        <p class="main-desc text-center">
          Mamy <span class="highlight">licencję międzynarodową</span> i
          <span class="highlight">wszystkie zezwolenia na przewóz ładunków ponadgabarytowych</span>.
          Zlecenia obejmujemy <span class="highlight">ubezpieczeniem przewoźnika drogowego (OCP)</span> – z nami Twój
          ładunek jest bezpieczny.
        </p>

        <q-separator spaced />

        <!-- Wyróżniony box z informacją 24/7 -->
        <div class="emergency-box q-pa-md q-mt-md flex flex-center">
          <q-icon name="schedule" size="32px" color="white" class="q-mr-sm" />
          <p class="emergency-text">
            <b>Działamy 24/7/365 – także w święta.</b><br />
            Zadzwoń, a sprawnie i bezpiecznie pomożemy Ci wrócić na drogę!
          </p>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.main-card-wrapper {
  max-width: 100%;
  margin: 40px auto;
}

.main-card {
  background: white;
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(0, 0, 40, 0.08);
}

.header h1 {
  line-height: 1.3;
}

.main-desc {
  color: #555;
  font-size: 1.08rem;
  line-height: 1.7;
  margin-bottom: 0;
}

.highlight {
  color: #0e47a1;
  font-weight: 600;
}

.emergency-box {
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  color: white;
  border-radius: 10px;
  text-align: center;
}

.emergency-text {
  margin: 0;
  font-size: 1rem;
}
</style>
