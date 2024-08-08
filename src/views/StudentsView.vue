<script setup>
import StudentsList from '../components/student/StudentsList.vue'
import AddStudentForm from '../components/student/AddStudentForm.vue'
</script>

<template>
  <div>
    <h1>Students</h1>

    <details>
      <summary role="button" class="secondary">Add</summary>
      <add-student-form />
    </details>

    <h2>List All</h2>
    <students-list />
  </div>
</template>
