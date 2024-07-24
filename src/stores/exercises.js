import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { randomString } from '@/utils/functions'
import { v4 as uuid } from 'uuid'

const createMockExercise = (exerciseId) => {
  const title = exerciseId.toString() || randomString()
  return {
    id: uuid(),
    title: `Ejercicio ${title.toUpperCase()}`,
    path: `tp-${title}`
  }
}

const getDefaultValues = () => {
  const defaultValues = [createMockExercise(1), createMockExercise(2), createMockExercise(3)]
  return useStorage('exercises', defaultValues)
}

export const useExercisesStore = defineStore('exercises', () => {
  const list = ref(getDefaultValues())

  function addExercise(exercise) {
    list.value.push({
      id: uuid(),
      ...exercise
    })
  }

  function removeExercise(exerciseId) {
    list.value = list.value.filter((ex) => ex.id !== exerciseId)
  }

  return { list, addExercise, removeExercise }
})
