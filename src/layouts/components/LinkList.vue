<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>
<template>
  <ul class="list-group list-group-flush bg-transparent">
      <RouterLink class="list-group-item" to="/courses">
        <span><i class="ri-file-list-3-line me-2"></i>Courses</span>
      </RouterLink>
      <RouterLink class="list-group-item" to="/students">
        <span><i class="ri-graduation-cap-line me-2"></i>Students</span>
      </RouterLink>
      <RouterLink class="list-group-item" to="/grades">
        <span><i class="ri-numbers-line me-2"></i>Grades</span>
      </RouterLink>
      <hr />
      <button class="list-group-item text-start">
        <span><i class="ri-sun-line me-2"></i>Switch theme</span>
      </button>
      <button class="list-group-item text-start" @click="authStore.logout">
        <span><i class="ri-logout-circle-line me-2"></i>Log out</span>
      </button>
    </ul>
</template>

<style scoped>
  .list-group-item {
    background: transparent;
    border: none;
    border-radius: .5rem;
  }
  .list-group-item:hover {
    background-color: coral;
    color: white;
  }
</style>