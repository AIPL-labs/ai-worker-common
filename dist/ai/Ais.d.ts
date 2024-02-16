export declare const Ais: {
    decodeAiResponse: (resp: import("@mjtdev/engine").OpenAiTextResponse | import("@mjtdev/engine").CloudflareAiChunkResponse | undefined) => string | undefined;
    condenseToFitBudget: (values: readonly import("../chat/chatMessagesToPromptTextsChatML").PromptText[], tokenBudget: number, charactersBudget: number) => string;
};
//# sourceMappingURL=Ais.d.ts.map