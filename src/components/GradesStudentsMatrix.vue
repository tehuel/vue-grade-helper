<script setup>
import { storeToRefs } from 'pinia'
import { useGradesStore } from '../stores/grades'
import { useStudentsStore } from '../stores/students'
import { useExcercisesStore } from '../stores/excercises'

const { addGrade, getGradeForStudentAndExcercise } = useGradesStore()
const { list: studentsList } = storeToRefs(useStudentsStore())
const { list: excercisesList } = storeToRefs(useExcercisesStore())

const COMMENTS_LIST = ['good', 'bad', 'excellent']

const updateGrade = (student, excercise) => {
  const number = Math.ceil(Math.random() * 10)
  const comment = COMMENTS_LIST.at(Math.floor(Math.random() * COMMENTS_LIST.length))
  const grade = {
    number,
    comment
  }
  addGrade(student.firstName, excercise.path, grade)
}
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
        <pre>{{ getGradeForStudentAndExcercise(st.firstName, ex.path) }}</pre>
        <button @click="updateGrade(st, ex)">random grade</button>
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
}
</style>
