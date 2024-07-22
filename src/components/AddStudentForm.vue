<script setup>
import { ref } from 'vue'
import { useStudentsStore } from '../stores/students'

const EMPTY_STUDENT = {
  firstName: '',
  lastName: '',
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
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" v-model="student.firstName" />

    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" v-model="student.lastName" />

    <label for="githubUsername">Github Username</label>
    <input type="text" id="githubUsername" v-model="student.githubUsername" />

    <button type="submit">Add Student</button>
  </form>
</template>
