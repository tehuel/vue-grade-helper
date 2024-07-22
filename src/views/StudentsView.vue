<script setup>
import StudentsList from '../components/StudentsList.vue'
import AddStudentForm from '../components/AddStudentForm.vue'
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
