<script setup>
import { RouterLink } from 'vue-router';
import LinkList from './LinkList.vue';
</script>

<template>
  <nav class="bg-light rounded border h-100 m-3 p-3">
    <header class="py-2">
      <RouterLink class="navbar-brand fs-4" to="/">
        <img src="/src/assets/images/subjectLogo.png" alt="Logo" width="30" height="30"
          class="d-inline-block align-text-middle">
        Grade Helper
      </RouterLink>
    </header>
    <LinkList />
  </nav>
</template>