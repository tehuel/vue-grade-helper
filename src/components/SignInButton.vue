<script setup>
import router from '@/router';
import { onMounted } from 'vue';

const signInUrl = `${import.meta.env.VITE_API_URL}/api/auth/github`;
function loginWithGithub() {
  window.location.href = signInUrl;
}

async function handleGithubCallback() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  if (token) {
    localStorage.setItem('githubToken', token);
    router.push('/');
  }
}

onMounted(() => {
  handleGithubCallback()
})
</script>

<template>
  <button @click="loginWithGithub">Sign In with GitHub</button>
</template>