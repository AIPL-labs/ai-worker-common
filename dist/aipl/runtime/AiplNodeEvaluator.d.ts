import { AiplAstSpec, AiplNodeType } from "../AiplAstSpec";
import { AiplContext } from "./AiplContext";
export type AiplNodeEvaluator<T extends AiplNodeType> = (context: Readonly<AiplContext>) => (node: AiplAstSpec[T]) => AiplContext;
export type AiplNodePrimitiveEvaluator<T extends AiplNodeType, V> = (context: Readonly<AiplContext>) => (node: AiplAstSpec[T]) => V;
//# sourceMappingURL=AiplNodeEvaluator.d.ts.map