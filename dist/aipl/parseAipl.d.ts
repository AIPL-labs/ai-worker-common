import { type AiplLangageParams } from "./AiplLangageParams";
export declare const parseAipl: (text: string, params?: AiplLangageParams) => import("parsimmon").Result<{
    type: "program";
    value: import("./AiplAstSpec").AiplAstSpec["escapedSymbol" | "comment" | "multilineComment" | "apply" | "assignment" | "directAssignment" | "text" | "templateVariable" | "code"][];
    loc: import("./AiplAstSpec").AiplLoc;
}>;
//# sourceMappingURL=parseAipl.d.ts.map