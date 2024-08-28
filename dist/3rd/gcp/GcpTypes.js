export const isContent = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Array.isArray(straw.parts);
};
export var HarmCategory;
(function (HarmCategory) {
    HarmCategory[HarmCategory["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    HarmCategory[HarmCategory["SEXUALLY_EXPLICIT"] = 1] = "SEXUALLY_EXPLICIT";
    HarmCategory[HarmCategory["HATE_SPEECH"] = 2] = "HATE_SPEECH";
    HarmCategory[HarmCategory["HARASSMENT"] = 3] = "HARASSMENT";
    HarmCategory[HarmCategory["DANGEROUS_CONTENT"] = 4] = "DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
export var HarmBlockThreshold;
(function (HarmBlockThreshold) {
    HarmBlockThreshold[HarmBlockThreshold["BLOCK_NONE"] = 0] = "BLOCK_NONE";
    HarmBlockThreshold[HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = 1] = "BLOCK_LOW_AND_ABOVE";
    HarmBlockThreshold[HarmBlockThreshold["BLOCK_MED_AND_ABOVE"] = 2] = "BLOCK_MED_AND_ABOVE";
    HarmBlockThreshold[HarmBlockThreshold["BLOCK_ONLY_HIGH"] = 3] = "BLOCK_ONLY_HIGH";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
export const isGenerateContentResponse = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Array.isArray(straw.candidates);
};
export var FinishReason;
(function (FinishReason) {
    FinishReason[FinishReason["FINISH_REASON_UNSPECIFIED"] = 0] = "FINISH_REASON_UNSPECIFIED";
    FinishReason[FinishReason["STOP"] = 1] = "STOP";
    FinishReason[FinishReason["MAX_TOKENS"] = 2] = "MAX_TOKENS";
    FinishReason[FinishReason["SAFETY"] = 3] = "SAFETY";
    FinishReason[FinishReason["RECITATION"] = 4] = "RECITATION";
    FinishReason[FinishReason["OTHER"] = 5] = "OTHER";
})(FinishReason || (FinishReason = {}));
export var HarmProbability;
(function (HarmProbability) {
    HarmProbability[HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = 0] = "HARM_PROBABILITY_UNSPECIFIED";
    HarmProbability[HarmProbability["NEGLIGIBLE"] = 1] = "NEGLIGIBLE";
    HarmProbability[HarmProbability["LOW"] = 2] = "LOW";
    HarmProbability[HarmProbability["MEDIUM"] = 3] = "MEDIUM";
    HarmProbability[HarmProbability["HIGH"] = 4] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
//# sourceMappingURL=GcpTypes.js.map