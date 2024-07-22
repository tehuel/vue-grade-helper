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
  <div class="overflow-auto">
    <table>
      <thead>
        <tr>
          <th scope="col">Student</th>
          <th scope="col" v-for="ex in excercisesList" :key="ex">{{ ex.path }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="st in studentsList" :key="st">
          <th scope="row">{{ st.firstName }}</th>
          <td v-for="ex in excercisesList" :key="{ ...ex, ...st }">
            <add-grade-form :studentId="st.firstName" :excerciseId="ex.path" />
            <hr>
            <pre>Grade: {{ getGradeForStudentAndExcercise(st.firstName, ex.path) }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
