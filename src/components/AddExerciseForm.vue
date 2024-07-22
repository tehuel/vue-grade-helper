<script setup>
import { ref } from 'vue'
import { useExercisesStore } from '../stores/exercises'

const EMPTY_EXERCISE = {
  title: '',
  path: ''
}

const { addExercise } = useExercisesStore()

const exercise = ref({ ...EMPTY_EXERCISE })

function onSubmit() {
  addExercise({
    ...exercise.value
  })
  exercise.value = { ...EMPTY_EXERCISE }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="exercise.title" />
    </div>

    <div>
      <label for="path">Path</label>
      <input type="text" id="path" v-model="exercise.path" />
    </div>

    <button type="submit">Add Exercise</button>
  </form>
</template>
