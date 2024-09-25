<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <main class="container">
    <main-navbar />
    <RouterView />
  </main>
  <footer class="container">
    <hr>
    <small>Vue Grade Helper | <a href="https://github.com/tehuel/vue-grade-helper">Source Code</a></small>
  </footer>
</template>
