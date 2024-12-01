import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getCourses, getCourse, storeCourse, deleteCourse } from '@/services/courseService';
import handleAsync from '@/utils/handleAsync';

export const useCoursesStore = defineStore('courses', () => {
  const list = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const course = ref({});

  async function fetchCourses() {
    await handleAsync(async () => {
      list.value = await getCourses();
    }, { loading, error });
  }

  async function fetchCourse(courseId) {
    await handleAsync(async () => {
      course.value = await getCourse(courseId);
    }, { loading, error });
  }

  async function addCourse(course) {
    await handleAsync(async () => {
      const newCourse = await storeCourse(course);
      list.value.push(newCourse);
    }, { loading, error });
  }

  async function removeCourse(courseId) {
    await handleAsync(async () => {
      await deleteCourse(courseId);
      list.value = list.value.filter(course => course.id !== courseId);
    }, { loading, error });
  }

  return {
    list,
    course,
    loading,
    error,
    fetchCourses,
    fetchCourse,
    addCourse,
    removeCourse
  };
});