import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentDetails from '@/views/StudentDetails.vue'
import ExercisesView from '../views/ExercisesView.vue'
import GradesView from '../views/GradesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView
    },
    {
      path: '/students/:id',
      name: 'student',
      component: StudentDetails
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExercisesView
    },
    {
      path: '/grades',
      name: 'grades',
      component: GradesView
    }
  ]
})

export default router
