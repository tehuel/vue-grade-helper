<script setup>
import { storeToRefs } from 'pinia'
import { useGradesStore } from '../stores/grades'
import { useStudentsStore } from '../stores/students'
import { useExcercisesStore } from '../stores/excercises'
import AddGradeForm from './AddGradeForm.vue'

const { getGradeForStudentAndExcercise } = useGradesStore()
const { list: studentsList } = storeToRefs(useStudentsStore())
const { list: excercisesList } = storeToRefs(useExcercisesStore())

</script>

<template>
  <table>
    <tr>
      <td>Student</td>
      <td v-for="ex in excercisesList" :key="ex">{{ ex.path }}</td>
    </tr>
    <tr v-for="st in studentsList" :key="st">
      <td>{{ st.firstName }}</td>
      <td v-for="ex in excercisesList" :key="{ ...ex, ...st }">
        <add-grade-form :studentId="st.firstName" :excerciseId="ex.path" />
        <hr>
        <pre>Grade: {{ getGradeForStudentAndExcercise(st.firstName, ex.path) }}</pre>
      </td>
    </tr>
  </table>
</template>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 3px;
}
</style>
