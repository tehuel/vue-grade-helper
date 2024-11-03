<script setup>
import router from '@/router';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const signInUrl = `${import.meta.env.VITE_API_URL}/api/auth/github`;

function loginWithGithub() {
  window.location.href = signInUrl;
}

async function handleGithubCallback() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  if (token) {
    authStore.setToken(token);
    router.push('/');
  }
}

onMounted(async () => {
  handleGithubCallback();
});
</script>

<template>
  <button @click="loginWithGithub"><i class="ri-github-fill"></i> Sign In with Github</button>
</template>