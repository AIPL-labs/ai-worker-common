export const isAppMessageType = (type, message) => {
    const straw = message;
    return typeof straw === "object" && straw.type === type;
};
//# sourceMappingURL=AppMessage.js.map