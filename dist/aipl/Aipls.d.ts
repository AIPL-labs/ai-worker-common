export type AiplStatement = {
    text: string;
    index?: number;
    event: string;
    conditions: string[];
    arrow: string;
    stateLocation: string;
    operator: string;
    value?: string;
};
export declare const parseCompoundCondition: (text: string) => string[];
export declare const parseAiplText: (text: string) => AiplStatement[];
export declare const Aipls: {
    parseAiplText: (text: string) => AiplStatement[];
};
//# sourceMappingURL=Aipls.d.ts.map