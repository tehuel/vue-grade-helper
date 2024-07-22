<script setup>
import ExcercisesList from '../components/ExcercisesList.vue'
import AddExcerciseForm from '../components/AddExcerciseForm.vue'
</script>

<template>
  <div>
    <h1>Excercises</h1>

    <details>
      <summary role="button" class="secondary">Add</summary>
      <add-excercise-form />
    </details>

    <h2>List All</h2>
    <excercises-list />
  </div>
</template>
