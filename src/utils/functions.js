/**
 * Generates a random 5 character long string
 * @returns string
 */
export const randomString = () => {
  return Math.random().toString(36).slice(2, 7)
}
