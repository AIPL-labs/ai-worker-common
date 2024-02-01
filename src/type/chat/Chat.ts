import { DataObject } from "../data/DataObject";

export type Chat = DataObject & {
  name?: string;
  tags: string[];
  currentMessageId: string | undefined;
  creation: number;
  modification: number;
  userName: string;
  aiName: string;
  systemName: string;
  maxResponseTokens: number;
  minResponseTokens: number;
  maxContextTokens: number;
  aiCharacterId?: string;
  userCharacterId?: string;
  stop: string[];
  stopAfter: string[];
  params: undefined | Record<string, string>;
};
