import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { deleteStudent, getStudents, storeStudent, updateStudent } from '../services/studentService'

export const useStudentsStore = defineStore('students', () => {
  const list = ref([])

  onMounted(async () => {
    list.value = await getStudents();
  })
  async function addStudent(student) {
    try {
      const newStudent = await storeStudent(student);
      list.value.push(newStudent);
    } catch (error) {
      console.error('Error adding new student:', error)
    }
  }

  async function modifyStudent(id, student) {
    try {
      const updatedStudent = await updateStudent(id, student);
      list.value = list.value.map(st => st.id === id ? updatedStudent : st);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  }

  async function removeStudent(studentId) {
    try {
      await deleteStudent(studentId);
      list.value = list.value.filter(student => student.id !== studentId);
    } catch (error) {
      console.error('Error removing student:', error);
    }
  }

  return { list, addStudent, removeStudent, modifyStudent }
})