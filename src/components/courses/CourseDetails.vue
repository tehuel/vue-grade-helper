<script setup>
import { useCoursesStore } from '@/stores/courses';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import StudentsList from '../student/StudentsList.vue';
import GradesStudentsMatrix from '../GradesStudentsMatrix.vue';

const route = useRoute();

const coursesStore = useCoursesStore();
const courseId = route.params.id;

const { course, loading, error } = storeToRefs(coursesStore);

onMounted(async () => await coursesStore.fetchCourse(courseId));
</script>

<template>
  <div v-if="loading" class="loading">Loading course...</div>

  <div v-else-if="error" class="error">{{ error }}</div>

  <div v-else>
    <h1>{{ course.name }}</h1>

    <ul class="nav nav-tabs" id="courseTabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="students-tab" data-bs-toggle="tab" data-bs-target="#students-tab-pane"
          type="button" role="tab" aria-controls="students-tab-pane" aria-selected="true">Students</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="grades-tab" data-bs-toggle="tab" data-bs-target="#grades-tab-pane" type="button"
          role="tab" aria-controls="grades-tab-pane" aria-selected="false">Grades</button>
      </li>
    </ul>

    <div class="tab-content p-3" id="courseTabsContent">
      <div class="tab-pane fade show active" id="students-tab-pane" role="tabpanel" aria-labelledby="students-tab" tabindex="0">
        <h2 class="mb-3 ">Students</h2>
        <StudentsList :course_id="course.id"/>  <!-- Course id is intended to be passed to the StudentsList component -->
      </div>
      <div class="tab-pane fade" id="grades-tab-pane" role="tabpanel" aria-labelledby="grades-tab" tabindex="0">
        <h2>Grades</h2>
        <GradesStudentsMatrix :course_id="course.id"/>  <!-- Course id is intended to be passed to the GradesStudentsMatrix component -->
      </div>
    </div>
  </div>
</template>