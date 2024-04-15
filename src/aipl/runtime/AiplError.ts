import type { AiplLoc, AiplNode} from "../AiplAstSpec";
import { AiplNodeType } from "../AiplAstSpec";
import type { AiplContext } from "./AiplContext";

export type AiplError = {
  cause?: unknown;
  message: string;
  loc: AiplLoc;
  context: AiplContext;
  node: AiplNode;
};

export const isAiplError = (maybe: unknown): maybe is AiplError => {
  const straw = maybe as AiplError;
  return typeof straw === "object" && typeof straw.loc === "object";
};

