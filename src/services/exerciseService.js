import { apiRequest } from "./apiService";
export async function getExercises() {
  try {
    const exercises = await apiRequest("exercises");
    return exercises;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
export async function storeExercise(exercise) {
  try {
    const newExercise = await apiRequest("exercises", "POST", exercise);
    return newExercise;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
export async function updateExercise(id, exercise) {
  try {
    const updatedExercise = await apiRequest(`exercises/${id}`, "PUT", exercise);
    return updatedExercise;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}
export async function deleteExercise(id) {
  try {
    const deletedExercise = await apiRequest(`exercises/${id}`, "DELETE");
    return deletedExercise;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}