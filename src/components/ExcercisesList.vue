<script setup>
import { storeToRefs } from 'pinia'
import { useExcercisesStore } from '../stores/excercises'

const excercisesStore = useExcercisesStore()
const { list: excercises } = storeToRefs(excercisesStore)
</script>

<template>
  <ul class="excercisesList">
    <li v-for="ex in excercises" :key="`${ex.title}${ex.path}`">
      <pre>{{ ex }}</pre>
    </li>
  </ul>
</template>
