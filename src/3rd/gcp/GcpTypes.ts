export type GenerateContentRequest = {
  contents: Content[];
  systemInstruction: SystemInstruction;
  tools: Tool[];
  safetySettings: SafetySetting[];
  generationConfig: GenerationConfig;
};

export const isContent = (maybe: unknown): maybe is Content => {
  const straw = maybe as Content;
  return typeof straw === "object" && Array.isArray(straw.parts);
};

export type Content = {
  role: string;
  parts: Part[];
};

export type Part = {
  text?: string;
  inlineData?: Blob;
  fileData?: FileData;
  videoMetadata?: VideoMetadata;
};

export type Blob = {
  mimeType: string;
  data: string;
};

export type FileData = {
  mimeType: string;
  fileUri: string;
};

export type VideoMetadata = {
  startOffset: Duration;
  endOffset: Duration;
};

export type Duration = {
  seconds: number;
  nanos: number;
};

export type SystemInstruction = {
  role: string;
  parts: InstructionPart[];
};

export type InstructionPart = {
  text: string;
};

export type Tool = {
  functionDeclarations: FunctionDeclaration[];
};

export type FunctionDeclaration = {
  name: string;
  description: string;
  parameters: Record<string, unknown>; // OpenAPI Object Schema
};

export type SafetySetting = {
  category: HarmCategory;
  threshold: HarmBlockThreshold;
};

export enum HarmCategory {
  UNSPECIFIED,
  SEXUALLY_EXPLICIT,
  HATE_SPEECH,
  HARASSMENT,
  DANGEROUS_CONTENT,
}

export enum HarmBlockThreshold {
  BLOCK_NONE,
  BLOCK_LOW_AND_ABOVE,
  BLOCK_MED_AND_ABOVE,
  BLOCK_ONLY_HIGH,
}

export type GenerationConfig = {
  temperature: number;
  topP: number;
  topK: number;
  candidateCount: number;
  maxOutputTokens: number;
  presencePenalty: number;
  frequencyPenalty: number;
  stopSequences: string[];
  responseMimeType: string;
};

export const isGenerateContentResponse = (
  maybe: unknown
): maybe is GenerateContentResponse => {
  const straw = maybe as GenerateContentResponse;
  return typeof straw === "object" && Array.isArray(straw.candidates);
};

export type GenerateContentResponse = {
  candidates: Candidate[];
  usageMetadata: UsageMetadata;
};

export type Candidate = {
  content: Content;
  finishReason: FinishReason;
  safetyRatings: SafetyRating[];
  citationMetadata: CitationMetadata;
};

export enum FinishReason {
  FINISH_REASON_UNSPECIFIED,
  STOP,
  MAX_TOKENS,
  SAFETY,
  RECITATION,
  OTHER,
}

export type SafetyRating = {
  category: HarmCategory;
  probability: HarmProbability;
  blocked: boolean;
};

export enum HarmProbability {
  HARM_PROBABILITY_UNSPECIFIED,
  NEGLIGIBLE,
  LOW,
  MEDIUM,
  HIGH,
}

export type CitationMetadata = {
  citations: Citation[];
};

export type Citation = {
  startIndex: number;
  endIndex: number;
  uri: string;
  title: string;
  license: string;
  publicationDate: Date;
};

export type UsageMetadata = {
  promptTokenCount: number;
  candidatesTokenCount: number;
  totalTokenCount: number;
};
