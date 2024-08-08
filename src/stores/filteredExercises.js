import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useExercisesStore } from './exercises'

export const useFilteredExercisesStore = defineStore('filteredExercises', () => {
  const { list: exercicesList } = storeToRefs(useExercisesStore())

  const appliedFiltersForexercicesList = ref(new Set())

  const isExerciseInFilter = (exerciseId) => {
    return appliedFiltersForexercicesList.value.has(exerciseId)
  }

  const applyExercisesListFilter = (exerciseId) => {
    if (isExerciseInFilter(exerciseId)) {
      appliedFiltersForexercicesList.value.delete(exerciseId)
    } else {
      appliedFiltersForexercicesList.value.add(exerciseId)
    }
  }

  const filteredExercisesList = () => {
    return exercicesList.value.filter((ex) => {
      if (!appliedFiltersForexercicesList.value.size) {
        return true
      }
      return isExerciseInFilter(ex.id)
    })
  }

  return {
    applyExercisesListFilter,
    filteredExercisesList,
    isExerciseInFilter
  }
})
