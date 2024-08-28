export declare const isOpenRouterTextgenRequest: (maybe: unknown) => maybe is OpenRouterTextgenRequest;
export type OpenRouterTextgenRequest = {
    messages?: OpenRouterMessage[];
    prompt?: string;
    model?: string;
    response_format?: {
        type: "json_object";
    };
    stop?: string | string[];
    stream?: boolean;
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    top_k?: number;
    frequency_penalty?: number;
    presence_penalty?: number;
    repetition_penalty?: number;
    seed?: number;
    tools?: Tool[];
    tool_choice?: ToolChoice;
    logit_bias?: {
        [key: number]: number;
    };
    transforms?: string[];
    models?: string[];
    route?: "fallback";
    provider?: ProviderPreferences;
};
export declare const PROVIDERS: readonly ["OpenAI", "Anthropic", "HuggingFace", "Google", "Mancer", "Mancer 2", "Together", "DeepInfra", "Azure", "Modal", "AnyScale", "Replicate", "Perplexity", "Recursal", "Fireworks", "Mistral", "Groq", "Cohere", "Lepton", "OctoAI", "Novita", "Lynn", "Lynn 2"];
export type ProviderPreferences = {
    allow_fallbacks: boolean;
    require_parameters: boolean;
    data_collection: "deny" | "allow";
    order: (typeof PROVIDERS)[number][];
};
type TextContent = {
    type: "text";
    text: string;
};
type ImageContentPart = {
    type: "image_url";
    image_url: {
        url: string;
        detail?: string;
    };
};
type ContentPart = TextContent | ImageContentPart;
export declare const isOpenRouterMessage: (maybe: unknown) => maybe is OpenRouterMessage;
export type OpenRouterMessage = {
    role: "user" | "assistant" | "system" | "tool";
    content: string | ContentPart[];
    name?: string;
};
type FunctionDescription = {
    description?: string;
    name: string;
    parameters: object;
};
type Tool = {
    type: "function";
    function: FunctionDescription;
};
type ToolChoice = "none" | "auto" | {
    type: "function";
    function: {
        name: string;
    };
};
export {};
//# sourceMappingURL=OpenRouterTextgenRequest.d.ts.map