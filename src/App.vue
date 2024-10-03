<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <main class="container">
    <main-navbar />
    <RouterView />
  </main>
  <FooterComponent />
</template>
