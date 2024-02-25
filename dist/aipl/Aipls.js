import { Arrays, isDefined } from "@mjtdev/engine";
const STATEMENT_REGEX = /^\s*([a-z0-9\:(\.\!\|\&)]+)\s*(->)\s*([a-z0-9\.]+)\s*([\?=])\s*([\s\S]*)/gim;
const EVENT_CONDITION_SPLIT_REGEX = /([a-z0-9\:]+)\(?(.*)/i;
export const parseCompoundCondition = (text) => {
    return Arrays.from(text.match(/([!|&]+)|([^!|&]+)/g) ?? []);
};
const parseEventCondition = (text) => {
    const match = text.match(EVENT_CONDITION_SPLIT_REGEX);
    if (!match) {
        throw new Error(`parseEventCondition no event found: ${text}`);
    }
    console.log("match", { match });
    const conditions = parseCompoundCondition(match[2].replace(/\)$/, ""));
    return {
        event: match[1],
        conditions,
        // condition: match[2] ? match[2].replace(/\)$/, "") : undefined,
    };
};
const textToStatements = (text) => {
    const matches = Arrays.from(text.matchAll(STATEMENT_REGEX));
    // console.log("textToStatements", { matches });
    const result = [];
    for (const match of matches) {
        if (match.length < 5) {
            continue;
        }
        const index = match.index;
        const text = match[0];
        const eventCondition = match[1];
        // console.log("eventCondition", {
        //   eventCondition,
        //   parsed: parseEventCondition(eventCondition),
        // });
        const { event, conditions } = parseEventCondition(eventCondition);
        const arrow = match[2];
        const stateLocation = match[3];
        const operator = match[4];
        const tail = match[5];
        const childStatements = textToStatements(tail);
        const firstChildStatementIndex = childStatements[0]?.index;
        const statement = {
            text,
            index,
            event,
            conditions,
            arrow,
            stateLocation,
            operator,
            value: isDefined(firstChildStatementIndex)
                ? tail.slice(0, firstChildStatementIndex)
                : tail,
        };
        result.push(statement, ...childStatements);
    }
    return result;
};
export const parseAiplText = (text) => {
    return textToStatements(text);
};
export const Aipls = { parseAiplText };
//# sourceMappingURL=Aipls.js.map