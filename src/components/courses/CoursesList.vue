<script setup>
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '@/stores/courses';

const coursesStore = useCoursesStore()
const { list: courses } = storeToRefs(coursesStore)

function handleRemove(courseId) {
  coursesStore.removeCourse(courseId)
}
</script>

<template>
  <ul class="coursesList">
    <li v-for="course in courses" :key="course">
      <pre>{{ course }}</pre>
      <button @click="handleRemove(course.id)">x</button>
    </li>
  </ul>
</template>

<style lang="scss">
ul.coursesList {
  li {
    list-style: none;
    list-style-position: outside;
    margin-bottom: 1rem;
    display: flex;
  }

  pre {
    margin: 0;
    flex-grow: 1;
  }
}
</style>
