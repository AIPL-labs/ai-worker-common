import { StateUpdater } from "@mjtdev/engine";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
export type AiFunctionCtx = {
    arg?: string;
    env: {
        getMessageById: (id: string) => ChatMessage | undefined;
        getCharacterById: (id: string) => AiCharacter | undefined;
        getChat: () => Chat;
        updateChat: StateUpdater<Chat>;
        updateMessages: StateUpdater<{
            messages: Record<string, ChatMessage>;
        }>;
        updateCharacters: StateUpdater<{
            characters: Record<string, AiCharacter>;
        }>;
    } & Record<string, unknown>;
};
export declare const useAiFunctionState: import("@mjtdev/engine").State<{
    functions: Record<string, AiFunctionInterface>;
}>, updateAiFunctionState: StateUpdater<{
    functions: Record<string, AiFunctionInterface>;
}>, getAiFunctionState: import("@mjtdev/engine").StateGetter<{
    functions: Record<string, AiFunctionInterface>;
}>;
export type AiFunction = (ctx: AiFunctionCtx) => void;
export type AiFunctionParam = {
    name: string;
    description: string;
    type?: string;
};
export type AiFunctionDescription = {
    name: string;
    usage: string;
    params?: AiFunctionParam | AiFunctionParam[];
};
export type AiFunctionInterface = AiFunctionDescription & {
    func?: AiFunction;
};
//# sourceMappingURL=AiFunctions.d.ts.map