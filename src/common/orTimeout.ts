export const orTimeout = <T>(
  timeoutMs: number,
  producer: () => T | Promise<T>
) => {
  const timeoutError = new Error(`timed out after: ${timeoutMs}ms`);
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<T>(async (resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(timeoutError);
    }, timeoutMs);
    try {
      const result = await producer();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      clearTimeout(timeoutId);
    }
  });
};
