import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { getCourses, storeCourse, deleteCourse } from '@/services/courseService';

export const useCoursesStore = defineStore('courses', () => {
  const list = ref([])

  onMounted(async () => {
    list.value = await getCourses();
  })

  async function addCourse(course) {
    try {
      const newCourse = await storeCourse(course);
      list.value.push(newCourse);
    } catch (error) {
      console.error('Error adding new course:', error)
    }
  }

  async function removeCourse(courseId) {
    try {
      await deleteCourse(courseId);
      list.value = list.value.filter(course => course.id !== courseId);
    } catch (error) {
      console.error('Error removing course:', error);
    }
  }

  return { list, addCourse, removeCourse }
})