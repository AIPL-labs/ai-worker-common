import { DataObject } from "../data/DataObject";
export type ChatAnswer = DataObject & {
    answer: string;
};
export declare const isChatAnswer: (maybe: unknown) => maybe is ChatAnswer;
//# sourceMappingURL=ChatAnswer.d.ts.map