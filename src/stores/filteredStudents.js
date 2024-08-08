import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useStudentsStore } from './students'

export const useFilteredStudentsStore = defineStore('filteredStudents', () => {
  const { list: studentsList } = storeToRefs(useStudentsStore())

  const appliedFiltersForStudentsList = ref(new Set())

  const isStudentInFilter = (studentId) => {
    return appliedFiltersForStudentsList.value.has(studentId)
  }

  const applyStudentsListFilter = (studentId) => {
    if (isStudentInFilter(studentId)) {
      appliedFiltersForStudentsList.value.delete(studentId)
    } else {
      appliedFiltersForStudentsList.value.add(studentId)
    }
  }

  const filteredStudentsList = () => {
    return studentsList.value.filter((st) => {
      if (!appliedFiltersForStudentsList.value.size) {
        return true
      }
      return isStudentInFilter(st.id)
    })
  }

  return {
    applyStudentsListFilter,
    filteredStudentsList,
    isStudentInFilter
  }
})
