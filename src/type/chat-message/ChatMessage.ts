import { ChatContent } from "../chat/ChatContent";
import { DataObject } from "../data/DataObject";

export type ChatMessage = DataObject & {
  chatId?: string;
  characterId?: string;
  disabled?: boolean;
  parent: string | undefined;
  createTime: number;
  updateTime: number;
  name?: string;
  role: "system" | "user" | "assistant";
  content: ChatContent;
  metadata: Partial<{ model: string }>;
  status: string;
};
