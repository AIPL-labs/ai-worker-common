import type { AiplAstSpec, AiplNodeType } from "../AiplAstSpec";
import type { AiplContext } from "./AiplContext";

export type AiplNodeEvaluator<T extends AiplNodeType> = (
  context: Readonly<AiplContext>
) => (node: AiplAstSpec[T]) => AiplContext;

export type AiplNodePrimitiveEvaluator<T extends AiplNodeType, V> = (
  context: Readonly<AiplContext>
) => (node: AiplAstSpec[T]) => V;

export type AiplNodeBinaryPrimitiveEvaluator<T extends AiplNodeType, V> = (
  context: Readonly<AiplContext>
) => (
  left: AiplAstSpec[T],
  right: AiplAstSpec[T],
  expr: AiplAstSpec["binaryExpr"]
) => V;
