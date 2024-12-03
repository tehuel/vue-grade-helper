import { computed, onMounted, ref } from 'vue';
import { defineStore } from 'pinia';
import { getGrades, storeGrade } from '@/services/gradesService';

export const useGradesStore = defineStore('grades', () => {
  const list = ref([]);

  onMounted(async () => {
    list.value = await getGrades();
  });

  async function addGrade(grade) {
    try {
      const newGrade = await storeGrade(grade)
      list.value.push(newGrade)
    } catch (error) {
      console.log('Error adding new grade', error)
    }
  }

  const getAllGradesForStudent = computed(() => {
    return (student_id) => {
      return list.value.filter((gradeRecord) => gradeRecord.student_id == student_id)
    }
  })

  const getGradesForStudent = computed(() => {

    return (student_id) => {
      const allGrades = getAllGradesForStudent.value(student_id)
      const keyedByExercise = allGrades.reduce(
        (result, gradeRecord) =>
          Object.assign(result, {
            [gradeRecord.exercise_id]: gradeRecord
          }),
        {}
      )
      return Object.values(keyedByExercise)
    }
  })

  const getAllGradesForExercise = computed(() => {
    return (exercise_id) => {
      return list.value.filter((gradeRecord) => gradeRecord.exercise_id == exercise_id)
    }
  })

  const getGradesForExercise = computed(() => {
    return (exercise_id) => {
      const allGrades = getAllGradesForExercise.value(exercise_id)
      const latestGradeByStudent = allGrades.reduce(
        (result, gradeRecord) =>
          Object.assign(result, {
            [gradeRecord.student_id]: gradeRecord
          }),
        {}
      )
      return Object.values(latestGradeByStudent)
    }
  })

  const getGradeForStudentAndExercise = computed(() => {
    return (student_id, exercise_id) => {
      const allGrades = list.value.filter((gradeRecord) => {
        return gradeRecord.student_id == student_id && gradeRecord.exercise_id == exercise_id
      })
      const lastGrade = allGrades.pop()
      return lastGrade?.score || "N/A"
    }
  })

  return {
    list,
    addGrade,
    getGradesForStudent,
    getGradesForExercise,
    getGradeForStudentAndExercise
  }
})