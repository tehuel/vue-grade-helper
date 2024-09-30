<script setup>
import AddCourseForm from '@/components/courses/AddCourseForm.vue';
import CoursesList from '@/components/courses/CoursesList.vue';
</script>

<template>
  <div>
    <h1>Courses</h1>

    <details>
      <summary role="button" class="secondary">Add</summary>
      <add-course-form />
    </details>

    <h2>List All</h2>
    <courses-list />
  </div>
</template>