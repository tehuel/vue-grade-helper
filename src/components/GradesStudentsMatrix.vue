<script setup>
import { useGradesStore } from '@/stores/grades'
import { useFilteredStudentsStore } from '@/stores/filteredStudents'
import { useFilteredExercisesStore } from '@/stores/filteredExercises'
import AddGradeForm from './grades/AddGradeForm.vue'
import CheckOnlineStatus from './CheckOnlineStatus.vue'

const { getGradeForStudentAndExercise } = useGradesStore()
const { applyStudentsListFilter, filteredStudentsList, isStudentInFilter } =
  useFilteredStudentsStore()
const { applyExercisesListFilter, filteredExercisesList } = useFilteredExercisesStore()
</script>

<template>
  <div class="overflow-auto">
    <table class="striped">
      <thead>
        <tr>
          <th scope="col">Student</th>
          <th scope="col" v-for="ex in filteredExercisesList()" :key="ex">
            {{ ex.path }}
            <button @click="applyExercisesListFilter(ex.id)" style="padding: 0; font-size: 0.8em">
              filter
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="st in filteredStudentsList()" :key="st">
          <th scope="row">
            {{ st.firstName }}
            <button @click="applyStudentsListFilter(st.id)" style="padding: 0; font-size: 0.8em">
              {{ isStudentInFilter(st.id) ? 'show all' : 'solo' }}
            </button>
          </th>
          <td v-for="ex in filteredExercisesList()" :key="{ ...ex, ...st }">
            <check-online-status :student="st" :exercise="ex" />
            <add-grade-form :studentId="st.id" :exerciseId="ex.id" />
            <hr />
            <pre>Grade: {{ getGradeForStudentAndExercise(st.id, ex.id) }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
