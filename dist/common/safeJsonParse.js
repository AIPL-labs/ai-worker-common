import { safe } from "@mjtdev/engine";
export const safeJsonParse = (text) => {
    return safe(() => JSON.parse(text), { quiet: true });
};
//# sourceMappingURL=safeJsonParse.js.map