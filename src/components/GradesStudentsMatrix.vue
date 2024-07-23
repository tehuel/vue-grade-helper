<script setup>
import { storeToRefs } from 'pinia'
import { useGradesStore } from '@/stores/grades'
import { useStudentsStore } from '@/stores/students'
import { useExercisesStore } from '@/stores/exercises'
import AddGradeForm from './AddGradeForm.vue'

const { getGradeForStudentAndExercise } = useGradesStore()
const { list: studentsList } = storeToRefs(useStudentsStore())
const { list: exercisesList } = storeToRefs(useExercisesStore())

</script>

<template>
  <div class="overflow-auto">
    <table>
      <thead>
        <tr>
          <th scope="col">Student</th>
          <th scope="col" v-for="ex in exercisesList" :key="ex">{{ ex.path }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="st in studentsList" :key="st">
          <th scope="row">{{ st.firstName }}</th>
          <td v-for="ex in exercisesList" :key="{ ...ex, ...st }">
            <add-grade-form :studentId="st.firstName" :exerciseId="ex.path" />
            <hr>
            <pre>Grade: {{ getGradeForStudentAndExercise(st.firstName, ex.path) }}</pre>
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
