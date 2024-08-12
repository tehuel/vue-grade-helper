<script setup>
import { useI18n } from 'vue-i18n'
import StudentsList from '../components/student/StudentsList.vue'
import AddStudentForm from '../components/student/AddStudentForm.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <h1>{{ t('Students') }}</h1>

      <details>
      <summary role="button" class="secondary">{{ t('Add') }}</summary>
      <article>
        <add-student-form />
      </article>
    </details>

    <h2>{{ t('List All') }}</h2>
    <students-list />
  </div>
</template>
