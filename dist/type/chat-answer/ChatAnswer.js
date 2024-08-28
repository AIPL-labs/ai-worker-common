export const isChatAnswer = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.answer === "string";
};
//# sourceMappingURL=ChatAnswer.js.map