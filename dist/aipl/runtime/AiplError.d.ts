import { AiplLoc, AiplNode } from "../AiplAstSpec";
import { AiplContext } from "./AiplContext";
export type AiplError = {
    cause?: unknown;
    message: string;
    loc: AiplLoc;
    context: AiplContext;
    node: AiplNode;
};
export declare const isAiplError: (maybe: unknown) => maybe is AiplError;
//# sourceMappingURL=AiplError.d.ts.map