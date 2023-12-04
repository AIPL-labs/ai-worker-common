export type AiFunctions = {
    messageActions: Record<string, string>;
    characterActions: Record<string, string>;
    chatCommands: Record<string, string>;
};
export type AiActionParams = {
    chatId: string;
};
export type AiAction<T extends AiActionParams> = (params: T) => void;
export type AiCharacterAction = AiAction<AiActionParams & {
    characterId: string;
}>;
export type AiMessageAction = AiAction<AiActionParams & {
    messageId: string;
}>;
export type AiCommandAction = AiAction<AiActionParams & {
    command: string;
}>;
//# sourceMappingURL=AiFunctions.d.ts.map