<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useStudentsStore } from '@/stores/students'
import { useCoursesStore } from '@/stores/courses';

const coursesStore = useCoursesStore()
const { list: courses } = storeToRefs(coursesStore)

const EMPTY_STUDENT = {
  first_name: '',
  last_name: '',
  course_id: '',
  githubUsername: ''
}

const { addStudent } = useStudentsStore()

const student = ref({ ...EMPTY_STUDENT })

function onSubmit() {
  addStudent({
    ...student.value
  })
  student.value = { ...EMPTY_STUDENT }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid">
      <div>
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" v-model="student.first_name" />
      </div>

      <div>
        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" v-model="student.last_name" />
      </div>

      <div>
        <label for="course_id">Course ID</label>
        <select id="course_id" v-model="student.course_id">
          <option disabled value="">Please select one</option>
          <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
        </select>
      </div>

      <div>
        <label for="githubUsername">Github</label>
        <input type="text" id="githubUsername" v-model="student.githubUsername" />
      </div>
    </div>

    <button type="submit">Add Student</button>
  </form>
</template>