<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/students">Students</RouterLink>
    <RouterLink to="/excercises">Excercises</RouterLink>
    <RouterLink to="/grades">Grades</RouterLink>
  </nav>
</template>
