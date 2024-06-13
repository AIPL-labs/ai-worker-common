import type { AiplState } from "aipl/AiplState";
import type { AiplAstSpec, AiplNode } from "../AiplAstSpec";

export type AiplDecoratedValue<T> = {
  value: T;
  node?: AiplNode;
  contextName?: string;
};

export type AiplContext = {
  name?: string;
  state: AiplState;
  texts: string[];

  getAvailableTransforms: () => readonly string[];

  transform: (props: {
    name?: string;
    value: string;
    argument?: string;
  }) => string;

  assignValueStringToIdentifier: (props: {
    value: string;
    identifier: AiplAstSpec["identifier"];
    transformName?: string;
    transformArgument?: string;
  }) => void;
  assignQuestionStringToIdentifier: (props: {
    question: string;
    identifier: AiplAstSpec["identifier"];
    transformName?: string;
    transformArgument?: string;
  }) => void;
  assignUrlFunctionToIdentifier: (props: {
    url: string;
    urlFunction: AiplAstSpec["urlFunction"];
    identifier: AiplAstSpec["identifier"];
    data?: Record<string, string>;
    headers?: Record<string, string>;
    specials?: Record<string, string>;
    transformName?: string;
    transformArgument?: string;
  }) => void;

  softFunctionToBoolean: (value: string, node: AiplNode) => boolean;
  softFunctionToNumber: (value: string, node: AiplNode) => number;
  softFunctionBinaryToNumber: (props: {
    node: AiplAstSpec["binaryExpr"];
    left: string;
    right: string;
  }) => number;
  stringToBoolean: (value: string, node: AiplNode) => boolean;
  stringToNumber: (value: string, node: AiplNode) => number;
  logger: (message: string, ...extra: unknown[]) => void;
  error: (error: unknown) => void;
};
