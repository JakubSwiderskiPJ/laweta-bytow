<template>
  <header class="w-full fixed top-0 left-0 z-50 shadow bg-white">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <div class="text-2xl font-bold text-blue-600">
        Supreme<span class="text-yellow-500">CarWash</span>
      </div>
      <nav class="hidden md:flex space-x-6 text-gray-700 font-medium">

        <a href="#about" class="hover:text-blue-600">O nas</a>
        <a href="#services" class="hover:text-blue-600">Usługi</a>
        <a href="#pricing" class="hover:text-blue-600">Cennik</a>
        <router-link to="/wypozyczalnia" class="hover:text-blue-600">Wypożyczalnia</router-link>
        <a href="#testimonials" class="hover:text-blue-600">Opinie</a>
        <a href="#contact" class="hover:text-blue-600">Kontakt</a>
      </nav>
      <div class="hidden md:block">
        <a href="#order" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Zamów teraz
        </a>
      </div>
      <q-btn flat round icon="menu" class="md:hidden text-blue-600" />
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
