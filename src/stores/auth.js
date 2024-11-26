import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiRequest } from '@/services/apiService';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('currentUser')) || null);
  const token = ref(localStorage.getItem('githubToken') || null);
  const isAuthenticated = ref(!!token.value);

  async function setToken(newToken) {
    token.value = newToken;
    isAuthenticated.value = true;
    localStorage.setItem('githubToken', newToken);
  }

  async function setCurrentUser() {
    try {
      const currentUser = JSON.stringify(await apiRequest('user'));
      localStorage.setItem('currentUser', currentUser);
    } catch (error) {
      console.error('Error setting current user:', error);
    }
  }

  function logout() {
    token.value = null;
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('githubToken');
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  }

  return { user, token, isAuthenticated, setCurrentUser ,setToken, logout };
});
