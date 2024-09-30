import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { createMockCourse } from '@/utils/functions'

const getInitialValues = () => {
  const defaultValues = [
    createMockCourse('7mo2da'),
    createMockCourse('7mo3ra'),
    createMockCourse('7mo4ta')
  ]
  return useStorage('courses', defaultValues)
}

export const useCoursesStore = defineStore('courses', () => {
  const list = ref(getInitialValues())

  function addCourse(course) {
    list.value.push({
      id: uuid(),
      ...course
    })
  }

  function removeCourse(courseId) {
    list.value = list.value.filter((st) => st.id !== courseId)
  }

  return { list, addCourse, removeCourse }
})