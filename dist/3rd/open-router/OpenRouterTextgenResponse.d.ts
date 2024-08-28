export type OpenRouterTextgenResponse = {
    id: string;
    choices: (OpenRouterNonStreamingChoice | OpenRouterStreamingChoice | OpenRouterNonChatChoice | Error)[];
    created: number;
    model: string;
    object: "chat.completion" | "chat.completion.chunk";
    usage?: {
        completion_tokens: number;
        prompt_tokens: number;
        total_tokens: number;
        total_cost: number;
    };
};
export type OpenRouterNonChatChoice = {
    finish_reason: string | null;
    text: string;
};
export type OpenRouterNonStreamingChoice = {
    finish_reason: string | null;
    message: {
        content: string | null;
        role: string;
        tool_calls?: ToolCall[];
        function_call?: FunctionCall;
    };
};
export type OpenRouterStreamingChoice = {
    finish_reason: string | null;
    delta: {
        content: string | null;
        role?: string;
        tool_calls?: ToolCall[];
        function_call?: FunctionCall;
    };
};
type Error = {
    code: number;
    message: string;
};
type FunctionCall = {
    name: string;
    arguments: string;
};
type ToolCall = {
    id: string;
    type: "function";
    function: FunctionCall;
};
export {};
//# sourceMappingURL=OpenRouterTextgenResponse.d.ts.map