import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es: {
      Home: 'Inicio',
      Students: 'Alumnos',
      Student: 'Alumno',
      Exercises: 'Ejercicios',
      Exercise: 'Ejercicio',
      Grades: 'Calificaciones',
      Grade: 'Calificación',
      Add: 'Agregar',
      Filter: 'Filtrar',
      All: 'Todos',
      'List All': 'Listar Todos',
      'Add Exercise': 'Agregar Ejercicio',
      'Add Grade': 'Agregar Calificación',
      'Add Student': 'Agregar Alumno',
      Title: 'Título',
      Path: 'Ruta',
      'First Name': 'Nombre',
      'Last Name': 'Apellido',
      'Github Username': 'Usuario de Github',
      Delete: 'Eliminar',
      Grading: 'Calificación',
      Comment: 'Comentario',
      Matrix: 'Tabla',
      'Show Per Student': 'Mostrar por Alumno',
      'Show Per Exercise': 'Mostrar por Ejercicio'
    }
  }
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
