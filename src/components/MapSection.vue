<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
import { ref, watch } from 'vue'

const center = ref({ lat: 54.204856, lng: 17.534873 })

// Domyślnie ustawiamy markerOptions rozpakowując wartość center.value
const markerOptions = ref({
  position: center.value,
  label: 'L',
  title: 'CHMIELEWSKI TRANSPORT'
})

watch(center, (newVal) => {
  markerOptions.value.position = newVal
})

</script>

<template>


  <GoogleMap
    api-key="AIzaSyCyHNuZpx-HPfEqjt_Nf98vifPRmIOP1aY"
    mapId="DEMO_MAP_ID"
    style="width: 100%; height: 400px; "
    class="map_container"
    :center="center"
    :zoom="15"
  >
    <AdvancedMarker :options="{ position: center, title: 'CHMIELEWSKI TRANSPORT' }" />
  </GoogleMap>
</template>

<style scoped>

.map_container {
  text-align: center;

}

</style>
