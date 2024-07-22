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

  function addExercise(excercise) {
    list.value.push(excercise)
  }

  return { list, addExcercise: addExercise }
})
