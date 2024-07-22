<script setup>
import { storeToRefs } from 'pinia'
import { useExercisesStore } from '../stores/exercises'

const excercisesStore = useExercisesStore()
const { list: excercises } = storeToRefs(excercisesStore)
</script>

<template>
  <ul class="exercisesList">
    <li v-for="ex in excercises" :key="`${ex.title}${ex.path}`">
      <pre>{{ ex }}</pre>
    </li>
  </ul>
</template>
