export type AppObjectType = "chat" | "chat-message" | "ai-character" | "user";

export const uniqueId = (type: AppObjectType) => {
  return `${type}-${Date.now()}-${crypto.randomUUID()}`;
};
