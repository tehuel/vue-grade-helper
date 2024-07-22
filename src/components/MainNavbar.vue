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
        <RouterLink to="/students">Students</RouterLink>
      </li>
      <li>
        <RouterLink to="/excercises">Excercises</RouterLink>
      </li>
      <li>
        <RouterLink to="/grades">Grades</RouterLink>
      </li>
    </ul>
  </nav>
</template>
