import { DEFAULT_CHAT_MESSAGE_TEMPLATE } from "./DEFAULT_CHAT_MESSAGE_TEMPLATE";
// export const DEFAULT_STOP = ["<|im_start>", "<|im_end|>"];
export const DEFAULT_STOP = [
    "<|im_start>",
    "<|im_end|>",
    "<|end_of_turn|>",
    "<s>",
    "</s>",
    "[INST]",
    "[/INST]",
    "<|/s|>",
    "<|s|>",
    "<|",
    DEFAULT_CHAT_MESSAGE_TEMPLATE.messageStart,
    DEFAULT_CHAT_MESSAGE_TEMPLATE.messageEnd,
    // "📩",
    // "🛑"
];
// export const DEFAULT_STOP_AFTER = ["?"];
export const DEFAULT_STOP_AFTER = [];
//# sourceMappingURL=DEFAULT_STOP.js.map