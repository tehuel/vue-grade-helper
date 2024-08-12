<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import ExercisesList from '../components/exercices/ExercisesList.vue'
import AddExerciseForm from '../components/exercices/AddExerciseForm.vue'
</script>

<template>
  <div>
    <h1>{{ t('Exercises') }}</h1>

    <details>
      <summary role="button" class="secondary">{{ t('Add') }}</summary>
      <add-exercise-form />
    </details>

    <h2>{{ t('List All') }}</h2>
    <exercises-list />
  </div>
</template>
