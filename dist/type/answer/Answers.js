export const isAnswerDataObject = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.answer === "string";
};
//# sourceMappingURL=Answers.js.map