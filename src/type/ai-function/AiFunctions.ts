import { DataObject } from "../data/DataObject";

export type AiFunctionParam = {
  name: string;
  description: string;
  type?: string;
};

export type AiFunctionCall = DataObject & {
  name?: string;
  args: Record<string, string>;
};

export type AiFunctionDescription = {
  name: string;
  usage: string; // function for {usage}
  params?: AiFunctionParam | AiFunctionParam[];
  direction?: string;
};

export type AssistedEditorCommandProps = {
  type: string;
  name: string;
  fieldName: string;
  value: string;
};
