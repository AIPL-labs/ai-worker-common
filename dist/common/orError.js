export const orError = async (func) => {
    try {
        const value = await func();
        return value;
    }
    catch (err) {
        if (err instanceof Error) {
            return err;
        }
        return new Error(String(err));
    }
};
//# sourceMappingURL=orError.js.map