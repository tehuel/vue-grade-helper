export default async function handleAsync(action, options = {}) {
  const {
    loading = null,
    error = null,
  } = options;

  if (loading) loading.value = true;
  if (error) error.value = null;

  try {
    const result = await action();
    return result;
  } catch (err) {
    if (error) error.value = err?.message || 'An error occurred';
    throw err;
  } finally {
    if (loading) loading.value = false;
  }
}
