<script setup>
import { ref } from 'vue'
import { useExercisesStore } from '@/stores/exercises'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const EMPTY_EXERCISE = {
  title: '',
  path: ''
}

const { addExercise } = useExercisesStore()

const exercise = ref({ ...EMPTY_EXERCISE })

function onSubmit() {
  addExercise({
    ...exercise.value
  })
  exercise.value = { ...EMPTY_EXERCISE }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid">
      <div>
        <label for="title">{{ t('Title') }}</label>
        <input type="text" id="title" v-model="exercise.title" />
      </div>

      <div>
        <label for="path">{{ t('Path') }}</label>
        <input type="text" id="path" v-model="exercise.path" />
      </div>
    </div>
    <button type="submit">{{ t('Add Exercise') }}</button>
  </form>
</template>
