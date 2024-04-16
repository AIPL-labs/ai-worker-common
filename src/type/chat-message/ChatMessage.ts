import type { AiplNode } from "../../aipl/AiplAstSpec";
import type { AiFunctionCall } from "../ai-function/AiFunctions";
import type { ChatContent } from "../chat/ChatContent";
import type { DataObject } from "../data/DataObject";
import type { ChatRole } from "./ChatRole";

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

export type ChatStarter = DataObject & {
  position?: number;
  text?: string;
};

export type ChatStateEntry = DataObject & {
  type?: string;
  namespace?: string;
  key?: string;
  value?: string;
  node?: AiplNode;
  contextName?: string;
};

export type FunctionCallResult = DataObject & {
  type?: "text" | "image";
  value?: string | string[];
  prompt?: string;
  call: AiFunctionCall;
};
