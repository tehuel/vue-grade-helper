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
    <span v-if="onlineStatus === true"><i class="ri-checkbox-circle-line" style="color: green"></i></span>
    <span v-else-if="onlineStatus === false"><i class="ri-question-line" style="color:cornflowerblue"></i></span>
    <span v-else><i class="ri-more-line"></i></span>
    <a :href="getAddress()" target="_blank" style="margin-inline: 5px;">Link</a>
  </div>
</template>
