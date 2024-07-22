<script setup>
import ExercisesList from '../components/ExercisesList.vue'
import AddExerciseForm from '../components/AddExerciseForm.vue'
</script>

<template>
  <div>
    <h1>Exercises</h1>

    <details>
      <summary role="button" class="secondary">Add</summary>
      <add-exercise-form />
    </details>

    <h2>List All</h2>
    <exercises-list />
  </div>
</template>
