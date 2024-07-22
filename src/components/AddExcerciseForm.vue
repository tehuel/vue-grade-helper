<script setup>
import { ref } from 'vue'
import { useExcercisesStore } from '../stores/excercises'

const EMPTY_EXCERCISE = {
  title: '',
  path: ''
}

const { addExcercise } = useExcercisesStore()

const excercise = ref({ ...EMPTY_EXCERCISE })

function onSubmit() {
  addExcercise({
    ...excercise.value
  })
  excercise.value = { ...EMPTY_EXCERCISE }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="excercise.title" />
    </div>

    <div>
      <label for="path">Path</label>
      <input type="text" id="path" v-model="excercise.path" />
    </div>

    <button type="submit">Add Excercise</button>
  </form>
</template>
