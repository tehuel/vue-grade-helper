import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('githubToken') || null);
  const isAuthenticated = ref(!!token.value);

  async function setToken(newToken) {
    token.value = newToken;
    isAuthenticated.value = true;
    localStorage.setItem('githubToken', newToken);
  }

  function logout() {
    token.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('githubToken');
  }

  return { token, isAuthenticated, setToken, logout };
});
