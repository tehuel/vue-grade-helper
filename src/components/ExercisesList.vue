<script setup>
import { storeToRefs } from 'pinia'
import { useExercisesStore } from '@/stores/exercises'
import { useGradesStore } from '@/stores/grades';

const exercisesStore = useExercisesStore()
const gradesStore = useGradesStore()
const { list: exercises } = storeToRefs(exercisesStore)

function handleRemove(exerciseId) {
  exercisesStore.removeExercise(exerciseId);
  gradesStore.removeGradesForExercise(exerciseId);
}
</script>

<template>
  <ul class="exercisesList">
    <li v-for="ex in exercises" :key="ex">
      <pre>{{ ex }}</pre>
      <button @click="handleRemove(ex.id)">x</button>
    </li>
  </ul>
</template>

<style lang="scss">
ul.exercisesList {
  li {
    list-style: none;
    list-style-position: outside;
    margin-bottom: 1rem;
    display: flex;
  }

  pre {
    margin: 0;
    flex-grow: 1;
  }
}
</style>