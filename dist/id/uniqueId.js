export const uniqueId = (type, nonce = `${Date.now()}-${crypto.randomUUID()}`) => {
    return `${type}-${nonce}`;
};
//# sourceMappingURL=uniqueId.js.map