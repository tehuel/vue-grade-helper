import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomeView from '../views/HomeView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentDetails from '@/views/StudentDetails.vue'
import ExercisesView from '../views/ExercisesView.vue'
import GradesView from '../views/GradesView.vue'
import CoursesView from '../views/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView,
      meta: { requiresAuth: true  }
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView,
      meta: { requiresAuth: true  }
    },
    {
      path: '/students/:id',
      name: 'student',
      component: StudentDetails,
      meta: { requiresAuth: true  }
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExercisesView,
      meta: { requiresAuth: true  }
    },
    {
      path: '/grades',
      name: 'grades',
      component: GradesView,
      meta: { requiresAuth: true  }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router
