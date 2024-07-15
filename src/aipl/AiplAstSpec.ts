export type AiplNodeType = keyof AiplAstSpec;

export type AiplNode = AiplAstSpec[keyof AiplAstSpec];

/* Direct copy from @see Parsimmon.Index **/
type Index = {
  /** zero-based character offset */
  offset: number;
  /** one-based line offset */
  line: number;
  /** one-based column offset */
  column: number;
};

export type AiplLoc = {
  start: Index;
  end: Index;
};

export type AiplBooleanOp = "&" | "&&" | "|" | "||";
export type AiplComparisonOp =
  | ">"
  | ">="
  | "<"
  | "<="
  | "="
  | "=="
  | "!="
  | "!==";
export type AiplOp = AiplBooleanOp | AiplComparisonOp;

export type AiplNodeValueType = AiplAstSpec[keyof AiplAstSpec]["type"];

export const isAiplProgramAstNode = (
  maybe: unknown
): maybe is AiplAstSpec["program"] => {
  const straw = maybe as AiplAstSpec["program"];
  return typeof straw === "object" && straw.type === "program";
};

export type AiplAstSpec = {
  escapedSymbol: {
    type: "escapedSymbol";
    value:
      | AiplAstSpec["leftParen"]["value"]
      | AiplAstSpec["rightParen"]["value"];
    loc: AiplLoc;
  };

  leftParen: {
    type: "symbol";
    value: "(";
    loc: AiplLoc;
  };
  rightParen: {
    type: "symbol";
    value: ")";
    loc: AiplLoc;
  };
  leftCurlyBrace: {
    type: "symbol";
    value: "{";
    loc: AiplLoc;
  };
  rightCurlyBrace: {
    type: "symbol";
    value: "}";
    loc: AiplLoc;
  };

  text: { type: "text"; value: string; loc: AiplLoc };

  stringLiteral: {
    type: "stringLiteral";
    value: AiplAstSpec["template"];
    loc: AiplLoc;
  };

  doubleQuoteStringLiteral: {
    type: "stringLiteral";
    value: AiplAstSpec["template"];
    loc: AiplLoc;
  };
  singleQuoteStringLiteral: {
    type: "stringLiteral";
    value: AiplAstSpec["template"];
    loc: AiplLoc;
  };
  singleQuoteStringLiteral1: {
    type: "stringLiteral";
    value: AiplAstSpec["template"];
    loc: AiplLoc;
  };
  singleQuoteStringLiteral2: {
    type: "stringLiteral";
    value: AiplAstSpec["template"];
    loc: AiplLoc;
  };
  singleQuoteStringLiteral3: {
    type: "stringLiteral";
    value: AiplAstSpec["template"];
    loc: AiplLoc;
  };

  entry: {
    type: "entry";
    key: string;
    op: ":" | "=" | "==";
    value: AiplAstSpec["stringLiteral"];
    loc: AiplLoc;
  };

  list: {
    type: "list";
    values: AiplAstSpec["entry"][];
    loc: AiplLoc;
  };

  urlFunction: {
    type: "urlFunction";
    url: AiplAstSpec["url"];
    args?: AiplAstSpec["list"];
    loc: AiplLoc;
  };

  url: {
    type: "url";
    scheme: "http" | "https";
    host: string;
    port?: string;
    path?: string | AiplAstSpec["stringLiteral"];
    query?: string;
    loc: AiplLoc;
  };
  number: { type: "number"; value: number; loc: AiplLoc };
  boolean: { type: "boolean"; value: boolean; loc: AiplLoc };
  identifier: { type: "identifier"; value: string; loc: AiplLoc };
  transform: {
    type: "transform";
    name: string;
    arg?: AiplAstSpec["stringLiteral"] | AiplAstSpec["program"];
    loc: AiplLoc;
  };
  transformExpr: {
    type: "transformExpr";
    identifier: AiplAstSpec["identifier"];
    transform?: AiplAstSpec["transform"];
    loc: AiplLoc;
  };

  operator: { type: "operator"; value: AiplOp; loc: AiplLoc };
  comment: { type: "comment"; value: string; loc: AiplLoc };
  multilineComment: { type: "multilineComment"; value: string; loc: AiplLoc };

  apply: {
    type: "apply";
    param: AiplAstSpec["stringLiteral"];
    identifier: AiplAstSpec["identifier"];
    loc: AiplLoc;
  };
  assignment: {
    type: "assignment";
    question: AiplAstSpec["stringLiteral" | "urlFunction"];
    transformExpr: AiplAstSpec["transformExpr"];
    loc: AiplLoc;
  };
  directAssignment: {
    type: "directAssignment";
    question: AiplAstSpec["stringLiteral" | "urlFunction"];
    transformExpr: AiplAstSpec["transformExpr"];
    loc: AiplLoc;
  };

  templateVariable: {
    type: "templateVariable";
    // identifier: AiplAstSpec["identifier"];
    transformExpr: AiplAstSpec["transformExpr"];
    defaultValue?: string;
    loc: AiplLoc;
  };
  templateVariable1: {
    type: "templateVariable";
    // identifier: AiplAstSpec["identifier"];
    transformExpr: AiplAstSpec["transformExpr"];
    defaultValue?: string;
    loc: AiplLoc;
  };
  templateVariable2: {
    type: "templateVariable";
    // identifier: AiplAstSpec["identifier"];
    transformExpr: AiplAstSpec["transformExpr"];
    defaultValue?: string;
    loc: AiplLoc;
  };
  templateVariable3: {
    type: "templateVariable";
    // identifier: AiplAstSpec["identifier"];
    transformExpr: AiplAstSpec["transformExpr"];
    defaultValue?: string;
    loc: AiplLoc;
  };
  expr: {
    type: "expr";
    value: AiplAstSpec[
      | "stringLiteral"
      | "binaryExpr"
      | "unaryExpr"
      | "number"
      | "identifier"];
    loc: AiplLoc;
  };
  unaryExpr: {
    type: "unaryExpr";
    op: "!";
    operand: AiplAstSpec["expr"];
    loc: AiplLoc;
  };
  binaryExpr: {
    type: "binaryExpr";
    op: AiplAstSpec["operator"];
    left: AiplAstSpec[
      | "expr"
      | "identifier"
      | "number"
      | "unaryExpr"
      | "stringLiteral"];
    right: AiplAstSpec[
      | "expr"
      | "identifier"
      | "number"
      | "unaryExpr"
      | "stringLiteral"];
    loc: AiplLoc;
  };
  code: {
    type: "code";
    condition: AiplAstSpec["expr"];
    body: AiplAstSpec["program"];
    loc: AiplLoc;
  };

  template: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };

  templateSingle: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateSingle1: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateSingle2: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateSingle3: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateDouble: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateDouble1: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateDouble2: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };
  templateDouble3: {
    type: "template";
    value: (AiplAstSpec["templateVariable"] | string)[];
    loc: AiplLoc;
  };

  program: {
    type: "program";
    value: AiplAstSpec[
      | "escapedSymbol"
      | "comment"
      | "multilineComment"
      | "apply"
      | "assignment"
      | "directAssignment"
      | "text"
      | "templateVariable"
      | "code"][];
    loc: AiplLoc;
  };
};
