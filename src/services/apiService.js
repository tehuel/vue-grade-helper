/**
 * Makes a request to the GradeHelper API
 * @param { String } endpoint 
 * @param { String } method 
 * @param { Object } body 
 * @returns 
 */
export async function apiRequest(endpoint, method = "GET", body = null) {
  const baseURL = `${import.meta.env.VITE_API_URL}/api`;
  const githubToken = localStorage.getItem('githubToken');

  const headers = {
    'Content-Type': 'application/json',
    ...(githubToken && { 'Authorization': `Bearer ${githubToken}` })
  };

  const requestOptions = {
    method,
    headers,
    ...(body && method !== "GET" && { body: JSON.stringify(body) })
  };

  try {
    const response = await fetch(`${baseURL}/${endpoint}`, requestOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    if (response.status === 204) {
      return null;
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};