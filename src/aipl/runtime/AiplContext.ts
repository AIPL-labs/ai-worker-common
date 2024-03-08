import { AiplAstSpec } from "../AiplAstSpec";
import { AiplState } from "aipl/AiplState";

export type AiplContext = {
  state: AiplState;
  texts: string[];
  assignAnswerToIdentifier: ({
    question,
    identifier,
  }: {
    // question: AiplAstSpec["template"];
    question: string;
    identifier: AiplAstSpec["identifier"];
  }) => void;
  softFunctionToBoolean: (value: string) => boolean;
  softFunctionToNumber: (value: string) => number;
  stringToBoolean: (value: string) => boolean;
  stringToNumber: (value: string) => number;
  logger: (message: string, ...extra: any[]) => void;
  error: (error: unknown) => void;
};
