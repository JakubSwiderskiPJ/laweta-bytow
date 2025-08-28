<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
import { ref, watch } from 'vue'

const center = ref({ lat: 54.204812, lng: 17.534892 })

// Domyślnie ustawiamy markerOptions rozpakowując wartość center.value
const markerOptions = ref({
  position: center.value,
  label: 'L',
  title: 'CHMIELEWSKI TRANSPORT'
})

// Jeśli center się zmieni, markerOptions.position też musi się zaktualizować
watch(center, (newVal) => {
  markerOptions.value.position = newVal
})

const pinOptions = { background: '#FBBC04' }  // sprawdź czy obsługiwane, ewentualnie usuń
</script>

<template>
  <GoogleMap
    api-key="AIzaSyCyHNuZpx-HPfEqjt_Nf98vifPRmIOP1aY"
    mapId="DEMO_MAP_ID"
    style="width: 100%; height: 400px"
    :center="center"
    :zoom="15"
  >
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions" />

    <AdvancedMarker :options="markerOptions">
      <template #content>
        <div style="background: white; color: black; padding: 5px; border-radius: 5px">
          Custom Content
        </div>
      </template>
    </AdvancedMarker>
  </GoogleMap>
</template>
