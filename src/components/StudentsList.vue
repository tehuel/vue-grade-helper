<script setup>
import { storeToRefs } from 'pinia'
import { useStudentsStore } from '@/stores/students'

const studentsStore = useStudentsStore()
const { list: students } = storeToRefs(studentsStore)
</script>

<template>
  <ul class="studentsList">
    <li v-for="st in students" :key="`${st.firstName}${st.lastName}`">
      <pre>{{ st }}</pre>
    </li>
  </ul>
</template>
