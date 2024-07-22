<script setup>
import StudentsList from '../components/StudentsList.vue'
import AddStudentForm from '../components/AddStudentForm.vue'
</script>

<template>
  <div>
    <h1>Add Student</h1>

    <add-student-form />

    <h2>Students</h2>

    <students-list />
  </div>
</template>
