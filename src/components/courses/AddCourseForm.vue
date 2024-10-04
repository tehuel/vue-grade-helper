<script setup>
import { ref } from 'vue'
import { useCoursesStore } from '@/stores/courses';

const EMPTY_COURSE = {
  title: '',
  school_year: ''
}

const { addCourse } = useCoursesStore()

const course = ref({ ...EMPTY_COURSE })

function onSubmit() {
  addCourse({
    ...course.value
  })
  course.value = { ...EMPTY_COURSE }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="course.title" />
      </div>

      <div>
        <label for="school_year">School year</label>
        <input type="text" id="school_year" v-model="course.school_year" :placeholder="new Date().getFullYear()" />
      </div>
    </div>

    <button type="submit">Add Course</button>
  </form>
</template>
