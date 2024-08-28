export type VonageEvent = {
    headers: object;
    from: string;
    to: string;
    uuid: string;
    conversation_uuid: string;
    status: string;
    direction: string;
    timestamp: string;
};
export interface VonageAsr {
    speech: Speech;
    dtmf: Dtmf;
    from: string;
    to: string;
    uuid: string;
    conversation_uuid: string;
    timestamp: string;
}
export interface Speech {
    timeout_reason: string;
    results: VonageAsrResult[];
}
export interface VonageAsrResult {
    confidence: string;
    text: string;
}
export interface Dtmf {
    digits: unknown;
    timed_out: boolean;
}
export type VonageAnswerPayload = {
    to: number;
    from: number;
    uuid: string;
    conversation_uuid: string;
    region_url: string;
    custom_data: object;
};
export type VonageMakeCallResponse = {
    uuid: string;
    status: string;
    direction: "outbound" | "inbound";
    conversation_uuid: string;
};
//# sourceMappingURL=VongageTypes.d.ts.map