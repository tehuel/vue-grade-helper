import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomString } from '@/utils/functions'

const createMockExcercise = (excerciseId) => {
  const title = excerciseId.toString() || randomString()
  return {
    title: `Ejercicio ${title.toUpperCase()}`,
    path: `tp-${title}`
  }
}

export const useExcercisesStore = defineStore('excercises', () => {
  const list = ref([createMockExcercise(1), createMockExcercise(2), createMockExcercise(3)])

  function addExcercise(excercise) {
    list.value.push(excercise)
  }

  return { list, addExcercise }
})
