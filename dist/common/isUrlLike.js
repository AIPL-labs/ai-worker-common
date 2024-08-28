export const isUrlLike = (text) => {
    if (!text) {
        return false;
    }
    return /^http/i.test(text.trim());
};
//# sourceMappingURL=isUrlLike.js.map