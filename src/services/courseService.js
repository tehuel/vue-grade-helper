import { apiRequest } from "./apiService";

export async function getCourses() {
  const courses = await apiRequest('courses');
  return courses;

}

export async function getCourse(id) {
  const course = await apiRequest(`courses/${id}`);
  return course;
}

export async function storeCourse(course) {
  const newCourse = await apiRequest('courses', 'POST', course);
  return newCourse;
}

export async function updateCourse(id, course) {
  const updatedCourse = await apiRequest(`courses/${id}`, 'PUT', course);
  return updatedCourse;
}

export async function deleteCourse(id) {
  const deletedCourse = await apiRequest(`courses/${id}`, 'DELETE');
  return deletedCourse;
}