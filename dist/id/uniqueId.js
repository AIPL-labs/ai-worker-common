export const uniqueId = (type) => {
    return `${type}-${Date.now()}-${crypto.randomUUID()}`;
};
//# sourceMappingURL=uniqueId.js.map