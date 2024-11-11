import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { getExercises, storeExercise, updateExercise, deleteExercise  } from '@/services/exerciseService'

export const useExercisesStore = defineStore('exercises', () => {
  const list = ref([])

  onMounted(async () => {
    list.value = await getExercises();
  })

  async function addExercise(exercise) {
    try {
      const newExercise = await storeExercise(exercise);
      list.value.push(newExercise);
    } catch (error) {
      console.error('Error adding new exercise:', error)
    }
  }

  async function modifyExercise(exerciseId, exercise) {
    try {
      const updatedExercise = await updateExercise(exerciseId, exercise);
      list.value = list.value.map(ex => ex.id === exerciseId ? updatedExercise : ex);
    } catch (error) {
      console.error('Error updating exercise:', error);
    }
  }

  async function removeExercise(exerciseId) {
    try {
      await deleteExercise(exerciseId);
      list.value = list.value.filter(exercise => exercise.id !== exerciseId);
    } catch (error) {
      console.error('Error removing exercise:', error);
    }
  }

  return { list, addExercise, modifyExercise, removeExercise }
})