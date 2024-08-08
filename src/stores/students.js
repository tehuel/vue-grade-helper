import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { createMockStudent } from '@/utils/functions'

const getInitialValues = () => {
  const defaultValues = [
    createMockStudent('Ana'),
    createMockStudent('Beto'),
    createMockStudent('Ceci')
  ]
  return useStorage('students', defaultValues)
}

export const useStudentsStore = defineStore('students', () => {
  const list = ref(getInitialValues())

  function addStudent(student) {
    list.value.push({
      id: uuid(),
      ...student
    })
  }

  function removeStudent(studentId) {
    list.value = list.value.filter((st) => st.id !== studentId)
  }

  return { list, addStudent, removeStudent }
})
