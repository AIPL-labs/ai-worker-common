import { DataObject } from "../data/DataObject";

export type Chat = DataObject & {
  name?: string;
  tags: string[];
  currentMessageId: string | undefined;
  messageIds: string[];
  messageIdx: string;
  creation: number;
  modification: number;
  userName: string;
  aiName: string;
  systemName: string;
  maxResponseTokens: number;
  aiCharacterId?: string;
  userCharacterId?: string;
  vectorStoreIds?: string[];
  stop: string[];
  stopAfter: string[];
};
