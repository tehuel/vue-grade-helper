<script setup>
import { ref } from 'vue'
import { useGradesStore } from '@/stores/grades';

const { studentId, exerciseId } = defineProps(['studentId', 'exerciseId'])

const { addGrade } = useGradesStore()

const EMPTY_GRADE = {
  number: '',
  comment: ''
}

const grade = ref({ ...EMPTY_GRADE })

function handleSubmit() {
  addGrade(
    studentId,
    exerciseId,
    { ...grade.value }
  )
  // reset current grade
  grade.value = { ...EMPTY_GRADE }
}

const uniqueName = `${studentId}-${exerciseId}`.toLocaleLowerCase();

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label :for="`${uniqueName}-number`">Grade</label>
      <input type="number" min="1" max="10" :id="`${uniqueName}-number`" v-model="grade.number" />
    </div>

    <div>
      <label :for="`${uniqueName}-comment`">Comment</label>
      <input type="text" :id="`${uniqueName}-comment`" v-model="grade.comment" />
    </div>

    <button type="submit">Grade</button>
  </form>
</template>
