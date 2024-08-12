<script setup>
import { ref } from 'vue'
import { useStudentsStore } from '@/stores/students'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const EMPTY_STUDENT = {
  firstName: '',
  lastName: '',
  githubUsername: ''
}

const { addStudent } = useStudentsStore()

const student = ref({ ...EMPTY_STUDENT })

function onSubmit() {
  addStudent({
    ...student.value
  })
  student.value = { ...EMPTY_STUDENT }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid">
      <div>
        <label for="firstName">{{ t('First Name') }}</label>
        <input type="text" id="firstName" v-model="student.firstName" />
      </div>

      <div>
        <label for="lastName">{{ t('Last Name') }}</label>
        <input type="text" id="lastName" v-model="student.lastName" />
      </div>

      <div>
        <label for="githubUsername">{{ t('Github Username') }}</label>
        <input type="text" id="githubUsername" v-model="student.githubUsername" />
      </div>
    </div>

    <button type="submit">{{ t('Add Student') }}</button>
  </form>
</template>
