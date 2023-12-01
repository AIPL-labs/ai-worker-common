import { AiBot } from "../ai-bot/AiBot";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { AppUserProfile } from "../user/AppUser";
export type AppObjectTypeMapping = {
    chat: Chat;
    "chat-message": ChatMessage;
    "ai-character": AiCharacter;
    "ai-bot": AiBot;
    user: AppObjectType;
    "user-profile": AppUserProfile;
};
export type AppObjectType = keyof AppObjectTypeMapping;
//# sourceMappingURL=AppObjectType.d.ts.map