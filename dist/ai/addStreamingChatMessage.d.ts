import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
export declare const addStreamingChatMessage: ({ draft, chat, userId, }: {
    chat: Chat;
    userId: string;
    draft: Partial<ChatMessage>;
}) => Promise<(resp: import("@mjtdev/engine").OpenAiTextResponse | import("@mjtdev/engine").CloudflareAiChunkResponse | undefined, done: boolean) => boolean | undefined>;
//# sourceMappingURL=addStreamingChatMessage.d.ts.map