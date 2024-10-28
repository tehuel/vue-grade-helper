<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import SignInButton from './SignInButton.vue';

const authStore = useAuthStore();
</script>

<template>
  <nav>
    <ul v-if="authStore.isAuthenticated">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/courses">Courses</RouterLink>
      </li>
      <li>
        <RouterLink to="/students">Students</RouterLink>
      </li>
      <li>
        <RouterLink to="/exercises">Exercises</RouterLink>
      </li>
      <li>
        <RouterLink to="/grades">Grades</RouterLink>
      </li>
      <li>
        <button @click="authStore.logout"><i class="ri-logout-box-line"></i> Logout</button>
      </li>
    </ul>
    <ul v-else>
      <li>
        <SignInButton />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 1px solid var(--pico-primary);
  margin-bottom: var(--pico-spacing);
}

.logout {
  margin-left: auto;
}
</style>
