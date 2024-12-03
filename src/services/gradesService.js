import { apiRequest } from "./apiService";

export async function getGrades() {
  try {
    const grades = await apiRequest("grades");
    return grades;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function getGradesByExercise(exerciseId) {
  try {
    const grades = await apiRequest(`grades/exercise/${exerciseId}`);
    return grades;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function getGradesByStudent(studentId) {
  try {
    const grades = await apiRequest(`grades/student/${studentId}`);
    return grades;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function getGradesForStudentAndExercise(studentId, exerciseId) {
  const grades = await apiRequest(`grades/student/${studentId}/exercise/${exerciseId}`);
  return grades || "N/A"
}
export async function storeGrade(grade) {
  try {
    const newGrade = await apiRequest("grades", "POST", grade);
    return newGrade;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function deleteGrade(id) {
  try {
    const deletedGrade = await apiRequest(`grades/${id}`, "DELETE");
    return deletedGrade;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function updateGrade(id, grade) {
  try {
    const updatedGrade = await apiRequest(`grades/${id}`, "PUT", grade);
    return updatedGrade;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}