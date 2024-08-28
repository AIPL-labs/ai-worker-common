export type GenerateContentRequest = {
    contents: Content[];
    systemInstruction: SystemInstruction;
    tools: Tool[];
    safetySettings: SafetySetting[];
    generationConfig: GenerationConfig;
};
export declare const isContent: (maybe: unknown) => maybe is Content;
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
    parameters: Record<string, unknown>;
};
export type SafetySetting = {
    category: HarmCategory;
    threshold: HarmBlockThreshold;
};
export declare enum HarmCategory {
    UNSPECIFIED = 0,
    SEXUALLY_EXPLICIT = 1,
    HATE_SPEECH = 2,
    HARASSMENT = 3,
    DANGEROUS_CONTENT = 4
}
export declare enum HarmBlockThreshold {
    BLOCK_NONE = 0,
    BLOCK_LOW_AND_ABOVE = 1,
    BLOCK_MED_AND_ABOVE = 2,
    BLOCK_ONLY_HIGH = 3
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
export declare const isGenerateContentResponse: (maybe: unknown) => maybe is GenerateContentResponse;
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
export declare enum FinishReason {
    FINISH_REASON_UNSPECIFIED = 0,
    STOP = 1,
    MAX_TOKENS = 2,
    SAFETY = 3,
    RECITATION = 4,
    OTHER = 5
}
export type SafetyRating = {
    category: HarmCategory;
    probability: HarmProbability;
    blocked: boolean;
};
export declare enum HarmProbability {
    HARM_PROBABILITY_UNSPECIFIED = 0,
    NEGLIGIBLE = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4
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
//# sourceMappingURL=GcpTypes.d.ts.map