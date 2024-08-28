export const waitTimeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined);
        }, ms);
    });
};
//# sourceMappingURL=waitTimeout.js.map