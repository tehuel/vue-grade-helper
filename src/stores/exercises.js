import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomString } from '@/utils/functions'

const createMockExercise = (exerciseId) => {
  const title = exerciseId.toString() || randomString()
  return {
    title: `Ejercicio ${title.toUpperCase()}`,
    path: `tp-${title}`
  }
}

export const useExercisesStore = defineStore('exercises', () => {
  const list = ref([createMockExercise(1), createMockExercise(2), createMockExercise(3)])

  function addExercise(exercise) {
    list.value.push(exercise)
  }

  function removeExercise(exerciseId) {
    list.value = list.value.filter((ex) => ex.path !== exerciseId)
  }

  return { list, addExercise, removeExercise }
})
