import { ref } from 'vue'
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

export const useStudentsStore = defineStore('students', () => {
  const list = ref([createMockStudent('Ana'), createMockStudent('Beto'), createMockStudent('Ceci')])

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
