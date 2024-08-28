// modified for completion and better naming, see  https://openrouter.ai/docs#requests
export const isOpenRouterTextgenRequest = (maybe) => {
    const straw = maybe;
    return (typeof straw === "object" &&
        (Array.isArray(straw.messages) || typeof straw.prompt === "string"));
};
export const PROVIDERS = [
    "OpenAI",
    "Anthropic",
    "HuggingFace",
    "Google",
    "Mancer",
    "Mancer 2",
    "Together",
    "DeepInfra",
    "Azure",
    "Modal",
    "AnyScale",
    "Replicate",
    "Perplexity",
    "Recursal",
    "Fireworks",
    "Mistral",
    "Groq",
    "Cohere",
    "Lepton",
    "OctoAI",
    "Novita",
    "Lynn",
    "Lynn 2",
];
export const isOpenRouterMessage = (maybe) => {
    const straw = maybe;
    return ((typeof straw === "object" && typeof straw.content === "string") ||
        Array.isArray(straw.content));
};
//# sourceMappingURL=OpenRouterTextgenRequest.js.map