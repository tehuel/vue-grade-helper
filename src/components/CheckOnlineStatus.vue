<script setup>
import { ref, onMounted } from 'vue'
const { student, exercise } = defineProps(['student', 'exercise'])
const onlineStatus = ref(undefined)

const getAddress = () =>
  `https://${student.githubUsername}.github.io/plataformas-moviles-entregas/${exercise.path}`

const checkIsOnline = async () => {
  try {
    const address = getAddress()
    const response = await fetch(address)
    return response.status == 200
  } catch (e) {
    return false
  }
}

const check = async () => {
  onlineStatus.value = await checkIsOnline()
}

onMounted(() => {
  check()
})
</script>

<template>
  <div>
    <span v-if="onlineStatus === true"> (Online)</span>
    <span v-else-if="onlineStatus === false"> (Offline)</span>
    <span v-else> (Checking...)</span>
    <a :href="getAddress()" target="_blank">Link</a>
  </div>
</template>
