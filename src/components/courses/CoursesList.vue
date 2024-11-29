<script setup>
import { storeToRefs } from 'pinia';
import { useCoursesStore } from '@/stores/courses';
import { RouterLink } from 'vue-router';

const coursesStore = useCoursesStore();
const { list: courses } = storeToRefs(coursesStore);

function handleRemove(courseId) {
  coursesStore.removeCourse(courseId);
}
</script>

<template>
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
  <div class="col" v-for="course in courses" :key="course.id">
    <div class="card h-100">
      <div class="card-body row">
        <div class="col">
          <RouterLink :to="`/courses/${course.id}`" class="card-title fs-4">{{ course.name }}</RouterLink>
          <p class="card-text text-muted">{{ course.school_year }}</p>
        </div>
        <div class="col d-flex justify-content-end">
          <button class="btn btn-outline-danger" @click="handleRemove(course.id)">x</button>
        </div>
      </div>
    </div>
  </div>
</div>
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
