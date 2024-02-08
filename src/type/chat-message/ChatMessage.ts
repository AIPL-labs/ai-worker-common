import { AiFunctionCall } from "../ai-function/AiFunctions";
import { ChatContent } from "../chat/ChatContent";
import { DataObject } from "../data/DataObject";
import { ChatRole } from "./ChatRole";

export type ChatMessage = DataObject & {
  // chatId?: string;
  characterId?: string;
  disabled?: boolean;
  parent: string | undefined;
  createTime: number;
  updateTime: number;
  name?: string;
  role: ChatRole;
  content: ChatContent;
  functionResults?: FunctionCallResult[];
  metadata: Partial<{ model: string }>;
  status: string;
};

export type FunctionCallResult = {
  type: "text" | "image" | "memory" | "summary";
  value: string | string[];
  prompt?: string;
  call: AiFunctionCall;
};
