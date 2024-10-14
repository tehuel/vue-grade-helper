<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue';
import { apiRequest } from '@/utils/functions';
import SignInButton from './SignInButton.vue';

const user = ref(null);
const isAuthenticated = computed(() => !!user.value);

onMounted(async () => {
  user.value = await apiRequest('user', 'GET');
});
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
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
      <li v-if="!isAuthenticated">
        <SignInButton />
      </li>
      <li v-if="isAuthenticated">
        <span>Hi, {{ user.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 1px solid var(--pico-primary);
  margin-bottom: var(--pico-spacing);
}
</style>
