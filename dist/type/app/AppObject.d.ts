import { AiAgent as AiAgent } from "../ai-agent/AiBot";
import { AiCharacter } from "../ai-character/AiCharacter";
import { ChatMessage } from "../chat-message/ChatMessage";
import { Chat } from "../chat/Chat";
import { AppUser, AppUserProfile } from "../user/AppUser";
export type AppObjectTypeMapping = {
    chat: Chat;
    "chat-message": ChatMessage;
    "ai-character": AiCharacter;
    "ai-agent": AiAgent;
    user: AppUser;
    "user-profile": AppUserProfile;
};
export type AppObjectType = keyof AppObjectTypeMapping;
export type AppObject<T extends AppObjectType = AppObjectType> = AppObjectTypeMapping[T];
export declare const APP_OBJECT_TYPES: AppObjectType[];
export declare const isAppObjectType: (maybe: unknown) => maybe is keyof AppObjectTypeMapping;
//# sourceMappingURL=AppObject.d.ts.map