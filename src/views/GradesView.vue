<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import GradesStudentsMatrix from '../components/GradesStudentsMatrix.vue'

import { storeToRefs } from 'pinia'
import { useGradesStore } from '@/stores/grades'
import { useStudentsStore } from '@/stores/students'
import { useExercisesStore } from '@/stores/exercises'

const gradesStore = useGradesStore()
const { list: gradesList, getGradesForStudent, getGradesForExercise } = storeToRefs(gradesStore)
const { list: studentsList } = storeToRefs(useStudentsStore())
const { list: exercisesList } = storeToRefs(useExercisesStore())
</script>

<template>
  <div>
    <h1>{{ t('Grades') }}</h1>

    <h2>{{ t('Matrix') }}</h2>
    <grades-students-matrix />

    <h2>{{ t('Show Per Student') }}</h2>
    <ul>
      <li v-for="st in studentsList" :key="st">
        <p>{{ st.firstName }}</p>
        <pre>{{ getGradesForStudent(st.id) }}</pre>
      </li>
    </ul>

    <h2>{{ t('Show Per Exercise') }}</h2>
    <ul>
      <li v-for="ex in exercisesList" :key="ex">
        <p>{{ ex.title }}</p>
        <pre>{{ getGradesForExercise(ex.id) }}</pre>
      </li>
    </ul>

    <h2>{{ t('List All') }}</h2>
    <pre>{{ gradesList }}</pre>
  </div>
</template>
