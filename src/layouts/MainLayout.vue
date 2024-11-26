<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainSidebar from './components/MainSidebar.vue';
import MainNavbar from './components/MainNavbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div class="row g-0 min-vh-100">
    <aside class="d-none d-md-block col-md-4 col-lg-3 col-xxl-2">
      <MainSidebar />
    </aside>
    
    <div class="col">
      <header>
        <MainNavbar />
      </header>
      
      <main class="container">
        <RouterView />
      </main>
      
      <FooterComponent />
    </div>
  </div>
</template>