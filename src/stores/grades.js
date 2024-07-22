import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useGradesStore = defineStore('grades', () => {
  const list = ref([])

  function addGrade(studentId, excerciseId, grade) {
    list.value.push({
      date: new Date().toJSON(),
      studentId,
      excerciseId,
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
      const keyedByExcercise = allGrades.reduce(
        (result, gradeRecord) =>
          Object.assign(result, {
            [gradeRecord.excerciseId]: gradeRecord
          }),
        {}
      )
      return Object.values(keyedByExcercise)
    }
  })

  const getAllGradesForExcercise = computed(() => {
    return (excerciseId) => {
      return list.value.filter((gradeRecord) => gradeRecord.excerciseId == excerciseId)
    }
  })

  const getGradesForExcercise = computed(() => {
    return (excerciseId) => {
      const allGrades = getAllGradesForExcercise.value(excerciseId)
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

  const getGradeForStudentAndExcercise = computed(() => {
    return (studentId, excerciseId) => {
      const allGrades = list.value.filter((gradeRecord) => {
        return gradeRecord.studentId == studentId && gradeRecord.excerciseId == excerciseId
      })
      const lastGrade = allGrades.pop()
      return lastGrade
    }
  })

  return {
    list,
    addGrade,
    getGradesForStudent,
    getGradesForExcercise,
    getGradeForStudentAndExcercise
  }
})
