<script setup>
import { storeToRefs } from 'pinia'
import { useStudentsStore } from '@/stores/students'
import { useGradesStore } from '@/stores/grades';

const studentsStore = useStudentsStore()
const gradesStore = useGradesStore()
const { list: students } = storeToRefs(studentsStore)

function handleRemove(studentId) {
  studentsStore.removeStudent(studentId);
  gradesStore.removeGradesForStudent(studentId);
}
</script>

<template>
  <ul class="studentsList">
    <li v-for="st in students" :key="st">
      <pre>{{ st }}</pre>
      <button @click="handleRemove(st.id)">x</button>
    </li>
  </ul>
</template>

<style lang="scss">
ul.studentsList {
  li {
    list-style: none;
    list-style-position: outside;
    margin-bottom: 1rem;
    display: flex;
  }

  pre {
    margin: 0;
    flex-grow: 1;
  }
}
</style>