import type { AiplLangageParams } from "./AiplLangageParams";
export declare const tryParseAipl: (text: string, languageParams?: AiplLangageParams) => {
    type: "program";
    value: import("./AiplAstSpec").AiplAstSpec["escapedSymbol" | "comment" | "multilineComment" | "apply" | "assignment" | "directAssignment" | "text" | "templateVariable" | "code"][];
    loc: import("./AiplAstSpec").AiplLoc;
};
//# sourceMappingURL=tryParseAipl.d.ts.map