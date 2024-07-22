<script setup>
import StudentsList from '../components/StudentsList.vue'
import AddStudentForm from '../components/AddStudentForm.vue'
</script>

<template>
  <div>
    <h1>Students</h1>

    <h2>Add</h2>
    <add-student-form />

    <h2>List All</h2>
    <students-list />
  </div>
</template>
