import { Arrays } from "@mjtdev/engine";
import { AI_FUNCTION_PREFIX } from "./AI_FUNCTION_TOKEN";
export const parseAiFunctionText = (text) => {
    if (!text) {
        return undefined;
    }
    const regex = new RegExp(`${AI_FUNCTION_PREFIX}([a-zA-Z0-9_-]+)\\((.*)\\)`);
    const match = Arrays.from(regex.exec(text) ?? []);
    if (match.length !== 3) {
        return undefined;
    }
    return { name: match[1], arg: match[2] };
};
//# sourceMappingURL=parseAiFunctionText.js.map