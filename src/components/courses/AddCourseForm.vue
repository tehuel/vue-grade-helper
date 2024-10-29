<script setup>
import { ref } from 'vue'
import { useCoursesStore } from '@/stores/courses';

const EMPTY_COURSE = {
  name: '',
  school_year: new Date().getFullYear()
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
        <label for="name">Name</label>
        <input type="text" id="name" v-model="course.name" />
      </div>

      <div>
        <label for="school_year">School year</label>
        <input type="text" id="school_year" v-model="course.school_year" />
      </div>
    </div>

    <button type="submit">Add Course</button>
  </form>
</template>
