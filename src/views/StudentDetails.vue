<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStudentsStore } from '@/stores/students';
import { useExercisesStore } from '@/stores/exercises';
import { useGradesStore } from '@/stores/grades';
import { storeToRefs } from 'pinia';

const route = useRoute();
const studentsStore = useStudentsStore();
const exercisesStore = useExercisesStore();
const gradesStore = useGradesStore();

const studentId = route.params.id;
const student = studentsStore.list.find((s) => s.id === studentId);
const { list: exercises } = storeToRefs(exercisesStore);
const avatarUrl = ref('');

const fetchGithubProfilePicture = async () => {
  if (student.githubUsername) {
    try {
      const response = await fetch(`https://api.github.com/users/${student.githubUsername}`);
      if (response.ok) {
        avatarUrl.value = (await response.json()).avatar_url;
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error(error);
    }
  }
};

onMounted(fetchGithubProfilePicture);
</script>

<template>
  <div>
    <h1>Student details</h1>

    <section class="student-data">
      <figure>
        <img :src="avatarUrl" alt="Github Picture" class="student-profile">
        <figcaption>
          <p>{{ student.firstName + " " + student.lastName }}</p>
          <p><i>@{{ student.githubUsername }}</i></p>
          <p>
            <a v-bind:href="'https://github.com/' + student.githubUsername + '/plataformas-moviles-entregas'">Repo</a>
            |
            <a v-bind:href="'https://' + student.githubUsername + '.github.io/plataformas-moviles-entregas/'">Pages</a>
          </p>
        </figcaption>
      </figure>
    </section>

    <hr />

    <section>
      <header>
        <h2>Grades</h2>
      </header>
      <ul>
        <li v-for="ex in exercises" :key="ex">
          {{ ex.title }}: {{ gradesStore.getGradeForStudentAndExercise(studentId, ex.id)?.grade?.number || 'N/A' }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
.tagline {
  margin-top: -20px;
  font-style: italic;
}

.student-data {
  text-align: center;
}

.student-data figure {
  display: inline-block;
}

.student-data figure img.student-profile {
  width: 175px;
  height: 175px;
  border-radius: 50%;
}

.student-data figure figcaption p {
  font-weight: 800;
  margin: 0;
}
</style>