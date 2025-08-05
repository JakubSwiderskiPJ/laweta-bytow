<template>
  <q-page padding class="max-w-5xl mx-auto pt-24">
    <h1 class="text-4xl font-bold text-blue-700 mb-8 text-center">
      Wypożyczalnia lawet, przyczep i busów
    </h1>

    <p class="mb-6 text-gray-700 text-center max-w-3xl mx-auto">
      Oferujemy szeroki wybór sprzętu do wynajmu – od przyczep i lawet po busy osobowe i towarowe.
      Wszystkie pojazdy i przyczepy są regularnie serwisowane i w pełni sprawne technicznie,
      gotowe do natychmiastowego użytku.
    </p>

    <!-- Lawety -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
        <q-icon name="local_shipping" size="28px" class="mr-2 text-blue-600" />
        Lawety (kat. B+E)
      </h2>

      <div class="grid gap-6 md:grid-cols-3">
        <CardItem
          title="Laweta 4 m"
          details="DMC: 2000 kg | Ładowność: 1430 kg | Długość: 400 cm | Szerokość: 200 cm"
          price="100 zł / doba"
          icon="directions_car"
        />
        <CardItem
          title="Laweta 5 m"
          details="DMC: 3000 kg | Ładowność: 2280 kg | Długość: 500 cm | Szerokość: 210 cm"
          price="150 zł / doba"
          icon="directions_car"
        />
        <CardItem
          title="Laweta na 2 auta"
          details="DMC: 3500 kg | Ładowność: 2520 kg | Długość: 850 cm | Szerokość: 210 cm"
          price="200 zł / doba"
          icon="directions_car"
        />
      </div>
    </section>

    <!-- Przyczepy lekkie -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
        <q-icon name="local_shipping" size="28px" class="mr-2 text-blue-600" />
        Przyczepy lekkie (kat. B)
      </h2>

      <div class="grid gap-6 md:grid-cols-4">
        <CardItem
          title="Lekka 1 oś"
          details="DMC: 750 kg | Dł.: 242 cm | Szer.: 123 cm | Wys.: 128 cm"
          price="50 zł / doba"
          icon="directions_car_filled"
        />
        <CardItem
          title="Lekka 2 osie"
          details="DMC: 750 kg | Dł.: 263 cm | Szer.: 143 cm | Wys.: 149 cm"
          price="80 zł / doba"
          icon="directions_car_filled"
        />
        <CardItem
          title="Lekka duża 2 osie"
          details="DMC: 750 kg | Dł.: 340 cm | Szer.: 143 cm | Wys.: 170 cm"
          price="100 zł / doba"
          icon="directions_car_filled"
        />
        <CardItem
          title="Lekka 2 osie bez plandeki"
          details="DMC: 750 kg | Dł.: 250 cm | Szer.: 123 cm"
          price="70 zł / doba"
          icon="directions_car_filled"
        />
      </div>
    </section>

    <!-- Dodatkowe info -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
        <q-icon name="info" size="28px" class="mr-2 text-blue-600" />
        Oferujemy również wynajem:
      </h2>
      <ul class="list-disc list-inside text-gray-700 text-lg max-w-md mx-auto">
        <li>Busów 9-osobowych</li>
        <li>Busów towarowych</li>
        <li>Autolawet</li>
      </ul>

      <p class="mt-4 text-gray-700 text-center max-w-md mx-auto">
        Ceny wynajmu samochodów ustalane są indywidualnie – <strong>od 50 zł / doba</strong>,
        w zależności od rodzaju pojazdu i długości najmu.
      </p>
    </section>

    <!-- Warunki wynajmu -->
    <section class="mb-10 bg-blue-50 p-6 rounded-lg max-w-md mx-auto">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
        <q-icon name="gavel" size="28px" class="mr-2 text-blue-600" />
        Warunki wynajmu:
      </h2>
      <ul class="list-disc list-inside text-gray-700 text-lg">
        <li>Kaucja za przyczepę: <strong>200 zł</strong></li>
        <li>Kaucja za samochód: <strong>1000 zł</strong></li>
        <li>Dokument tożsamości i ważne prawo jazdy wymagane przy podpisaniu umowy</li>
      </ul>
    </section>

    <!-- Godziny otwarcia -->
    <section class="text-center max-w-sm mx-auto">
      <h3 class="text-xl font-semibold text-blue-600 mb-2 flex justify-center items-center">
        <q-icon name="schedule" size="24px" class="mr-2" />
        Godziny otwarcia wypożyczalni:
      </h3>
      <p class="text-gray-700 font-medium">Poniedziałek – Sobota: 08:00 – 18:00</p>
    </section>
  </q-page>
</template>

<script setup>

// Komponent karty
const CardItem = {
  props: ['title', 'details', 'price', 'icon'],
  template: `
    <div
      class="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-default flex flex-col"
    >
      <q-icon :name="icon" size="36px" class="text-blue-600 mb-2" />
      <h3 class="text-lg font-semibold mb-1">{{ title }}</h3>
      <p class="text-gray-600 flex-grow">{{ details }}</p>
      <p class="mt-4 text-blue-700 font-bold text-lg">{{ price }}</p>
    </div>
  `
}
</script>
