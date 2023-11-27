import { DataObject } from "../data/DataObject";
export type Chat = DataObject & {
    name?: string;
    tags: string[];
    currentMessageId: string | undefined;
    messageIds: string[];
    creation: number;
    modification: number;
    userName: string;
    aiName: string;
    systemName: string;
    maxResponseTokens: number;
    aiCharacterId?: string;
    userCharacterId?: string;
};
//# sourceMappingURL=Chat.d.ts.map