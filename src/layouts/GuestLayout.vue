<script setup>
import SignInButton from '@/components/SignInButton.vue';
import { RouterLink, RouterView } from 'vue-router';


</script>
<template>
  <nav class="navbar bg-light shadow-sm">
    <div class="container-fluid py-2 px-sm-5 d-flex justify-content-between">
      <div>
        <RouterLink class="navbar-brand" to="/">
          <img src="/src/assets/images/subjectLogo.png" alt="Logo" width="30" height="30"
            class="d-inline-block align-text-middle">
          Grade Helper
        </RouterLink>
      </div>

      <div>
        <SignInButton />
      </div>
    </div>
  </nav>
  <main class="container mt-5">
    <RouterView />
  </main>
</template>