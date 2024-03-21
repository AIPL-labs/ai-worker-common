import { AiplAstSpec, AiplNode } from "../AiplAstSpec";
import { AiplState } from "aipl/AiplState";

export type AiplDecoratedValue<T> = {
  value: T;
  node?: AiplNode;
  contextName?: string;
};

export type AiplContext = {
  name?: string;
  state: AiplState;
  texts: string[];
  assignQuestionStringToIdentifier: ({
    question,
    identifier,
  }: {
    question: string;
    identifier: AiplAstSpec["identifier"];
  }) => void;
  assignUrlFunctionToIdentifier: ({
    urlFunction,
    identifier,
    data,
    headers,
  }: {
    urlFunction: AiplAstSpec["urlFunction"];
    identifier: AiplAstSpec["identifier"];
    data?: Record<string, string>;
    headers?: Record<string, string>;
  }) => void;

  softFunctionToBoolean: (value: string, node: AiplNode) => boolean;
  softFunctionToNumber: (value: string, node: AiplNode) => number;
  stringToBoolean: (value: string, node: AiplNode) => boolean;
  stringToNumber: (value: string, node: AiplNode) => number;
  logger: (message: string, ...extra: any[]) => void;
  error: (error: unknown) => void;
};
