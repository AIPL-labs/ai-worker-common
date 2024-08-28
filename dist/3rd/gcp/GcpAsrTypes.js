export const isSpeechRecognitionResult = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Array.isArray(straw.alternatives);
};
export const isRecognizeResponse = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Array.isArray(straw.results);
};
//# sourceMappingURL=GcpAsrTypes.js.map