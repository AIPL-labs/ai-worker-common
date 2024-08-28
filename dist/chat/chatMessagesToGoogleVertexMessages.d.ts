import type { Content } from "../3rd/gcp/GcpTypes";
import type { AppCharacter } from "../type/app-character/AppCharacter";
import type { ChatMessage } from "../type/chat-message/ChatMessage";
/**
 * The arbitrary rules of Gemini
 * - no empty messages
 * - user MUST be first message
 * - user then model order strict, (no user,user, model, etc....)
 * - system message outside of messages (system messages preserved here, dealt with elsewhere)
 */
export declare const chatMessagesToGoogleVertexMessages: ({ messages, characters, }: {
    characters?: Record<string, AppCharacter | undefined>;
    messages: ChatMessage[];
}) => Content[];
//# sourceMappingURL=chatMessagesToGoogleVertexMessages.d.ts.map