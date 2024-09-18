<script setup>
import { ref } from 'vue';
import { useGradesStore } from '@/stores/grades';
import { useFilteredStudentsStore } from '@/stores/filteredStudents';
import { useFilteredExercisesStore } from '@/stores/filteredExercises';
import AddGradeForm from './grades/AddGradeForm.vue';
import CheckOnlineStatus from './CheckOnlineStatus.vue';

const { getGradeForStudentAndExercise } = useGradesStore();
const { applyStudentsListFilter, filteredStudentsList, isStudentInFilter } =
  useFilteredStudentsStore();
const { applyExercisesListFilter, filteredExercisesList } = useFilteredExercisesStore();

const showGrader = ref(0);
const showDetails = (studentId, exerciseId) => {
  showGrader.value = showGrader.value === 1 ? 0 : 1
  applyStudentsListFilter(studentId)
  applyExercisesListFilter(exerciseId)
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
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="st in filteredStudentsList()" :key="st">
          <th scope="row">
            <a v-bind:href="'https://github.com/' + st.githubUsername">{{ st.lastName + " " +st.firstName }}</a>
            <i @click="applyStudentsListFilter(st.id)" v-bind:class="{ 'ri-eye-off-line': isStudentInFilter(st.id), 'ri-eye-line': !isStudentInFilter(st.id) }" style="cursor: pointer; margin-inline: 5px;"></i>
          </th>
          <td v-for="ex in filteredExercisesList()" :key="{ ...ex, ...st }">
            <div style="display: flex; cursor: pointer;" @click="showDetails(st.id, ex.id)">
              <check-online-status :student="st" :exercise="ex" /> | Grade: {{ getGradeForStudentAndExercise(st.id, ex.id) == "" ? getGradeForStudentAndExercise(st.id, ex.id) : "N/A" }}
            </div>
            <add-grade-form :studentId="st.id" :exerciseId="ex.id" v-if="showGrader"/> 
          </td>
        </tr>


      </tbody>

    </table>

  </div>
</template>
