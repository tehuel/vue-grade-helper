import { apiRequest } from "./apiService";

export async function getCourses() {
  try {
    const courses = await apiRequest('courses');
    return courses;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}

export async function getCourse(id) {
  try {
    const course = await apiRequest(`courses/${id}`);
    return course;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}

export async function storeCourse(course) {
  try {
    const newCourse = await apiRequest('courses', 'POST', course);
    return newCourse;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}

export async function updateCourse(id, course) {
  try {
    const updatedCourse = await apiRequest(`courses/${id}`, 'PUT', course);
    return updatedCourse;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}

export async function deleteCourse(id) {
  try {
    const deletedCourse = await apiRequest(`courses/${id}`, 'DELETE');
    return deletedCourse;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}