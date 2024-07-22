<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <main class="container">
    <main-navbar />
    <RouterView />
  </main>
</template>
