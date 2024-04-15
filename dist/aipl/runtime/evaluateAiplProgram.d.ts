import type { AiplNodeEvaluator, AiplNodePrimitiveEvaluator } from "./AiplNodeEvaluator";
import type { AiplAstSpec } from "../AiplAstSpec";
export declare const evaluateListNodeToOperatorObjects: AiplNodePrimitiveEvaluator<"list", Record<AiplAstSpec["entry"]["op"], Record<string, string>>>;
export declare const evaluateAiplProgram: AiplNodeEvaluator<"program">;
//# sourceMappingURL=evaluateAiplProgram.d.ts.map