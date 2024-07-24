import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { randomString } from '@/utils/functions'
import { v4 as uuid } from 'uuid'

const createMockStudent = (studentId) => {
  const name = studentId || randomString()
  return {
    id: uuid(),
    firstName: name,
    lastName: randomString(),
    githubUsername: randomString()
  }
}

const getDefaultValues = () => {
  const defaultValues = [
    createMockStudent('Ana'),
    createMockStudent('Beto'),
    createMockStudent('Ceci')
  ]
  return useStorage('students', defaultValues)
}

export const useStudentsStore = defineStore('students', () => {
  const list = ref(getDefaultValues())

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
