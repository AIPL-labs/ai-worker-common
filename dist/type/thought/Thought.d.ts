import { DataObject } from "../data/DataObject";
export type Thought = DataObject & {
    text: string;
    score: number;
    image?: string;
    documents: string[];
};
//# sourceMappingURL=Thought.d.ts.map