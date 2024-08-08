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
