export const orTimeout = (timeoutMs, producer) => {
    const timeoutError = new Error(`timed out after: ${timeoutMs}ms`);
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(timeoutError);
        }, timeoutMs);
        try {
            const result = await producer();
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
        finally {
            clearTimeout(timeoutId);
        }
    });
};
//# sourceMappingURL=orTimeout.js.map