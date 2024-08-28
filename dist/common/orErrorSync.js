export const orErrorSync = (func) => {
    try {
        const value = func();
        return value;
    }
    catch (err) {
        if (err instanceof Error) {
            return err;
        }
        return new Error(String(err));
    }
};
//# sourceMappingURL=orErrorSync.js.map