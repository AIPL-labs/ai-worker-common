import { ChatContent } from "../chat/ChatContent";
import { DataObject } from "../data/DataObject";
import { ChatRole } from "./ChatRole";
export type ChatMessage = DataObject & {
    characterId?: string;
    disabled?: boolean;
    parent: string | undefined;
    createTime: number;
    updateTime: number;
    name?: string;
    role: ChatRole;
    content: ChatContent;
    metadata: Partial<{
        model: string;
    }>;
    status: string;
};
//# sourceMappingURL=ChatMessage.d.ts.map