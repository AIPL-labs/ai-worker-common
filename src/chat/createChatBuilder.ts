import { Objects } from "@mjtdev/engine";
import { AppObjects } from "../app-object/AppObjects";
import { ChatMessage } from "../type/chat-message/ChatMessage";
import { Chat } from "../type/chat/Chat";
import { ChatUpdater } from "./ChatUpdater";
import { addChatMessage } from "./addChatMessage";

export const createChatBuilder = (
  params: {
    chat?: Chat;
    messages?: Record<string, ChatMessage>;
  } = {}
) => {
  let {
    chat: curChat = AppObjects.create("chat"),
    messages: curMessages = {},
  } = params;

  const dirty = new Set<string>();

  const builder = {
    update: (updater: ChatUpdater) => {
      updater(curChat, curMessages);
      return builder;
    },
    removeMessage: (messageId: string) => {
      const message = curMessages[messageId];
      if (!message) {
        return builder;
      }
      const children = Objects.values(curMessages).filter(
        (m) => m.parent === message.id
      );
      for (const child of children) {
        builder.updateMessage(child.id, (c) => {
          if (!c) {
            return c;
          }
          return {
            ...c,
            parent: message.parent,
          };
        });

        dirty.delete(messageId);
        delete curMessages[messageId];
      }

      return builder;
    },
    updateMessage: (
      messageId: string,
      updater: (message: ChatMessage | undefined) => ChatMessage | undefined
    ) => {
      dirty.add(messageId);
      const curMessage = curMessages[messageId];
      const updatedMessage = updater(curMessage);
      if (!updatedMessage) {
        delete curMessages[messageId];
        return undefined;
      }
      curMessages[messageId] = updatedMessage;
      return updatedMessage;
    },

    addMessage: (draft: Partial<ChatMessage>) => {
      const message = addChatMessage({ draft, builder });
      dirty.add(message.id);
      return message;
    },
    get: () => ({ chat: curChat, messages: curMessages } as const),
    getDirty: () => Array.from(dirty.values()),
    getCurrentMessage: () => curMessages[curChat.currentMessageId!],
  };
  return builder;
};
