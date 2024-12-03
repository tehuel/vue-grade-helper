import { apiRequest } from "./apiService";

export async function getStudents() {
  try {
    const students = await apiRequest("students");
    return students;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}


export async function storeStudent(student) {
  try {
    const newStudent = await apiRequest("students", "POST", student);
    return newStudent;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function updateStudent(id, student) {
  try {
    const updatedStudent = await apiRequest(`students/${id}`, "PUT", student);
    return updatedStudent;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

export async function deleteStudent(id) {
  try {
    const deletedStudent = await apiRequest(`students/${id}`, "DELETE");
    return deletedStudent;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}