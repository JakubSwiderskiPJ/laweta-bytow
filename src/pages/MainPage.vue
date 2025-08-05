<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderNav />
    <q-page-container>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <FooterSection />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderNav from 'components/HeaderNav.vue'
import HeroSection from 'components/HeroSection.vue'
import AboutSection from 'components/AboutSection.vue'
import ServicesSection from 'components/ServicesSection.vue'
import PricingSection from 'components/PricingSection.vue'
import TestimonialsSection from 'components/TestimonialsSection.vue'
import FooterSection from 'components/FooterSection.vue'
</script>
