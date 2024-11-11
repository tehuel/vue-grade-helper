<script setup>
import { ref } from 'vue'
import { useGradesStore } from '@/stores/grades'

const { student_id, exercise_id } = defineProps(['student_id', 'exercise_id'])

const { addGrade } = useGradesStore()

const EMPTY_GRADE = {
  score: '',
  comment: ''
}

const grade = ref({ ...EMPTY_GRADE })

function handleSubmit() {
  console.log("requesting to add grade", {student_id, exercise_id, ...grade.value })
  addGrade({student_id, exercise_id, ...grade.value })
  // reset current grade
  grade.value = { ...EMPTY_GRADE }
}

const uniqueName = `${student_id}-${exercise_id}`.toLocaleLowerCase()
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label :for="`${uniqueName}-score`">Grade</label>
      <input type="number" min="1" max="10" :id="`${uniqueName}-score`" v-model="grade.score" />
    </div>

    <div>
      <label :for="`${uniqueName}-comment`">Comment</label>
      <input type="text" :id="`${uniqueName}-comment`" v-model="grade.comment" />
    </div>

    <button type="submit">Grade</button>
  </form>
</template>
