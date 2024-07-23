import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomString } from '@/utils/functions'

const createMockStudent = (studentId) => {
  const name = studentId || randomString()
  return {
    firstName: name,
    lastName: randomString(),
    githubUsername: randomString()
  }
}

export const useStudentsStore = defineStore('students', () => {
  const list = ref([createMockStudent('Ana'), createMockStudent('Beto'), createMockStudent('Ceci')])

  function addStudent(student) {
    list.value.push(student)
  }

  function removeStudent(studentId) {
    list.value = list.value.filter((st) => st.firstName !== studentId)
  }

  return { list, addStudent, removeStudent }
})
