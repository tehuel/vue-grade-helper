import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useGradesStore = defineStore('grades', () => {
  const list = ref([])

  function addGrade(studentId, exerciseId, grade) {
    list.value.push({
      date: new Date().toJSON(),
      studentId,
      exerciseId,
      grade
    })
  }

  const getAllGradesForStudent = computed(() => {
    return (studentId) => {
      return list.value.filter((gradeRecord) => gradeRecord.studentId == studentId)
    }
  })

  const getGradesForStudent = computed(() => {
    return (studentId) => {
      const allGrades = getAllGradesForStudent.value(studentId)
      const keyedByExercise = allGrades.reduce(
        (result, gradeRecord) =>
          Object.assign(result, {
            [gradeRecord.exerciseId]: gradeRecord
          }),
        {}
      )
      return Object.values(keyedByExercise)
    }
  })

  const getAllGradesForExercise = computed(() => {
    return (exerciseId) => {
      return list.value.filter((gradeRecord) => gradeRecord.exerciseId == exerciseId)
    }
  })

  const getGradesForExercise = computed(() => {
    return (exerciseId) => {
      const allGrades = getAllGradesForExercise.value(exerciseId)
      const latestGradeByStudent = allGrades.reduce(
        (result, gradeRecord) =>
          Object.assign(result, {
            [gradeRecord.studentId]: gradeRecord
          }),
        {}
      )
      return Object.values(latestGradeByStudent)
    }
  })

  const getGradeForStudentAndExercise = computed(() => {
    return (studentId, exerciseId) => {
      const allGrades = list.value.filter((gradeRecord) => {
        return gradeRecord.studentId == studentId && gradeRecord.exerciseId == exerciseId
      })
      const lastGrade = allGrades.pop()
      return lastGrade
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
