import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

import HomeView from '../views/HomeView.vue';
import StudentsView from '../views/StudentsView.vue';
import StudentDetails from '@/views/StudentDetails.vue';
import ExercisesView from '../views/ExercisesView.vue';
import GradesView from '../views/GradesView.vue';
import CoursesView from '../views/CoursesView.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GuestLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/courses',
          name: 'courses',
          component: CoursesView
        },
        {
          path: '/students',
          name: 'students',
          component: StudentsView,
        },
        {
          path: '/students/:id',
          name: 'student',
          component: StudentDetails,
        },
        {
          path: '/exercises',
          name: 'exercises',
          component: ExercisesView,
        },
        {
          path: '/grades',
          name: 'grades',
          component: GradesView,
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated && to.name === 'home') {
    next({ name: 'courses' });
  } else if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
