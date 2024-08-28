import { Arrays, Objects, safe } from "@mjtdev/engine";
import { AI_FUNCTION_PREFIX } from "./AI_FUNCTION_TOKEN";
export const parseAiFunctionText = (text, options = {}) => {
    const { aiFunctionPrefix = AI_FUNCTION_PREFIX } = options;
    const regex = new RegExp(`${aiFunctionPrefix} ?([a-zA-Z0-9_-]+)\\((.*)\\);?(.*)$`, "gm");
    // const match = Arrays.from(regex.exec(text) ?? []);
    const matches = Arrays.from(text.matchAll(regex));
    const strippedText = text.replaceAll(regex, "");
    const calls = matches.map((match) => {
        const matchesTextLength = match.join("").length;
        const before = text.slice(0, matchesTextLength);
        return {
            match,
            matchesTextLength,
            before,
            // before: match[1],
            name: match[1],
            args: safe(() => parseAiFunctionArgText(match[2])) ?? {},
            after: text.slice(regex.lastIndex),
        };
    });
    return { calls, strippedText };
};
export const parseAiFunctionArgText = (text) => {
    const regex = new RegExp("([a-zA-Z0-9_-]+):[\"'](.*?)[\"'],?", "gm");
    const matches = Arrays.from(text.matchAll(regex));
    if (matches.length === 0) {
        return { _: text };
    }
    const argMap = Objects.fromEntries(matches.map((match) => {
        return [match[1], match[2].replace(/^"/, "").replace(/"$/, "")];
    }));
    return argMap;
};
//# sourceMappingURL=parseAiFunctionText.js.map