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
  // functionResults?: FunctionCallResult[];
  metadata: Partial<{ model: string }>;
  status: string;
};

export type ChatData = DataObject & {
  type?: string;
  name?: string;
  values?: Record<string, string>;
};

export type FunctionCallResult = DataObject & {
  type?: "text" | "image";
  value?: string | string[];
  prompt?: string;
  call: AiFunctionCall;
};
