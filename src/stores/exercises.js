import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { createMockExercise } from '@/utils/functions'

const getInitialValues = () => {
  const defaultValues = [createMockExercise(1), createMockExercise(2), createMockExercise(3)]
  return useStorage('exercises', defaultValues)
}

export const useExercisesStore = defineStore('exercises', () => {
  const list = ref(getInitialValues())

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
