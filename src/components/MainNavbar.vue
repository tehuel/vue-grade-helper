<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">{{ t('Home') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/students">{{ t('Students') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/exercises">{{ t('Exercises') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/grades">{{ t('Grades') }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 1px solid var(--pico-primary);
  margin-bottom: var(--pico-spacing);
}
</style>
