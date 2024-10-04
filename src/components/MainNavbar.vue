<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
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
    </ul>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 1px solid var(--pico-primary);
  margin-bottom: var(--pico-spacing);
}
</style>
