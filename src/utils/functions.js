import { v4 as uuid } from 'uuid'

/**
 * Generates a random 5 character long string
 * @returns string
 */
export const randomString = () => {
  return Math.random().toString(36).slice(2, 7)
}

export const createMockStudent = (studentId) => {
  const name = studentId || randomString()
  return {
    id: uuid(),
    firstName: name,
    lastName: randomString(),
    githubUsername: randomString()
  }
}

export const createMockExercise = (exerciseId) => {
  const title = exerciseId.toString() || randomString()
  return {
    id: uuid(),
    title: `Ejercicio ${title.toUpperCase()}`,
    path: `tp-${title}`
  }
}

export const apiRequest = async (endpoint, requestMethod) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${endpoint}`, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('githubToken')
      }
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}
