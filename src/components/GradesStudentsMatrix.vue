<script setup>
import { storeToRefs } from 'pinia'
import { useGradesStore } from '@/stores/grades'
import { useStudentsStore } from '@/stores/students'
import { useExercisesStore } from '@/stores/exercises'
import AddGradeForm from './AddGradeForm.vue'
import { ref } from 'vue'

const { getGradeForStudentAndExercise } = useGradesStore()
const { list: studentsList } = storeToRefs(useStudentsStore())
const { list: exercisesList } = storeToRefs(useExercisesStore())

const appliedFiltersForStudentsList = ref(new Set());
const appliedFiltersForExercicesList = ref(new Set());

function isStudentInFilter(studentId) {
  return appliedFiltersForStudentsList.value.has(studentId);
}

function isExerciseInFilter(exerciseId) {
  return appliedFiltersForExercicesList.value.has(exerciseId);
}

function applyStudentsListFilter(studentId) {
  if (isStudentInFilter(studentId)) {
    appliedFiltersForStudentsList.value.delete(studentId)
  } else {
    appliedFiltersForStudentsList.value.add(studentId);
  }
}

function applyExercicesListFilter(exerciseId) {
  if (isExerciseInFilter(exerciseId)) {
    appliedFiltersForExercicesList.value.delete(exerciseId)
  } else {
    appliedFiltersForExercicesList.value.add(exerciseId);
  }
}

const filteredStudentsList = () => {
  return studentsList.value.filter(st => {
    if (!appliedFiltersForStudentsList.value.size) {
      return true
    }
    return isStudentInFilter(st.id);
  })
};

const filteredExercisesList = () => {
  return exercisesList.value.filter(ex => {
    if (!appliedFiltersForExercicesList.value.size) {
      return true
    }
    return isExerciseInFilter(ex.id);
  })
}
</script>

<template>
  <div class="overflow-auto">
    <table>
      <thead>
        <tr>
          <th scope="col">Student</th>
          <th scope="col" v-for="ex in filteredExercisesList()" :key="ex">
            {{ ex.path }}
            <button @click="applyExercicesListFilter(ex.id)" style="padding: 0; font-size: 0.8em;">filter</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="st in filteredStudentsList()" :key="st">
          <th scope="row">
            {{ st.firstName }}
            <button @click="applyStudentsListFilter(st.id)" style="padding: 0; font-size: 0.8em;">
              {{ isStudentInFilter(st.id) ? 'show all' : 'solo' }}
            </button>
          </th>
          <td v-for="ex in filteredExercisesList()" :key="{ ...ex, ...st }">
            <add-grade-form :studentId="st.id" :exerciseId="ex.id" />
            <hr>
            <pre>Grade: {{ getGradeForStudentAndExercise(st.id, ex.id) }}</pre>
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
