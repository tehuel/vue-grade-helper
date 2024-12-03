<script setup>
import AddCourseForm from '@/components/courses/AddCourseForm.vue';
import CoursesList from '@/components/courses/CoursesList.vue';
</script>

<template>
  <div>
    <h1>Courses</h1>

    <details class="my-3">
      <summary role="button" class="btn btn-primary text-white">
        <span><i class="ri-add-line"></i>Add new course</span>
      </summary>
      <add-course-form />
    </details>

    <h2>List All</h2>
    <courses-list />
  </div>
</template>