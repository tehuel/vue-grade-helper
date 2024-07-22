<script setup>
import { storeToRefs } from 'pinia'
import { useExercisesStore } from '../stores/exercises'

const exercisesStore = useExercisesStore()
const { list: exercises } = storeToRefs(exercisesStore)
</script>

<template>
  <ul class="exercisesList">
    <li v-for="ex in exercises" :key="`${ex.title}${ex.path}`">
      <pre>{{ ex }}</pre>
    </li>
  </ul>
</template>
